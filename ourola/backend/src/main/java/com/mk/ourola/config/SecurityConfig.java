package com.mk.ourola.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.filter.CustomJsonAuthenticationFilter;
import com.mk.ourola.api.common.auth.filter.JwtAuthenticationProcessingFilter;
import com.mk.ourola.api.common.auth.handler.LoginFailureHandler;
import com.mk.ourola.api.common.auth.handler.LoginSuccessHandler;
import com.mk.ourola.api.common.auth.handler.OAuth2LoginFailureHandler;
import com.mk.ourola.api.common.auth.handler.OAuth2LoginSuccessHandler;
import com.mk.ourola.api.common.auth.service.CustomOAuth2UserService;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.auth.service.LoginService;
import com.mk.ourola.api.fan.repository.FanRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final LoginService loginService;

	private final JwtService jwtService;
	private final FanRepository fanRepository;
	private final ArtistRepository artistRepository;
	private final ObjectMapper objectMapper;
	private final OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;
	private final OAuth2LoginFailureHandler oAuth2LoginFailureHandler;
	private final CustomOAuth2UserService customOAuth2UserService;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.formLogin()
			.disable() // FormLogin 사용 X
			.httpBasic()
			.disable() // httpBasic 사용 X
			.cors()
			.configurationSource(corsConfigurationSource())
			.and()
			.csrf()
			.disable() // csrf 보안 사용 X
			.headers()
			.frameOptions()
			.disable()
			.and()

			// 세션 사용하지 않으므로 STATELESS로 설정
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)

			.and()

			//== URL별 권한 관리 옵션 ==//
			.authorizeRequests()

			// 아이콘, css, js 관련
			// 기본 페이지, css, image, js 하위 폴더에 있는 자료들은 모두 접근 가능
			.antMatchers("/css/**", "/images/**", "/js/**", "/favicon.ico", "/file/**")
			.permitAll()
			.antMatchers("/search/getAllGroup")
			.permitAll()
			.antMatchers(HttpMethod.GET, "/search/{group}")
			.permitAll()
			.antMatchers("/fan/sign-up", "/fan/email-duplicate-check", "/fan/nickname-duplicate-check", "/artist/sign-up")
			.permitAll() // 회원가입 접근 가능	// TODO: 아티스트 회원가입은 막던지 인증을 거치던지 수정해야 함
			// .antMatchers("/login/oauth2/**")
			// .permitAll()
			.antMatchers("/find/**")
			.permitAll()	// 아이디(이메일), 비밀번호 찾기 접근 가능
			.antMatchers("/ws/chat")
			.permitAll()
			.antMatchers("/admin").hasRole(Role.ADMIN.toString())	// 회원 관리 기능은 admin만 접근 가능
			.anyRequest()
			.authenticated() // 위의 경로 이외에는 모두 인증된 사용자만 접근 가능
			.and()
				// .oauth2ResourceServer(oauth2ResourceServer -> {
				// 	oauth2ResourceServer.opaqueToken(token -> token.introspectionUri())
				// });
		//== 소셜 로그인 설정 ==//
		    .oauth2Login()
			.successHandler(oAuth2LoginSuccessHandler) // 동의하고 계속하기를 눌렀을 때 Handler 설정
			.failureHandler(oAuth2LoginFailureHandler) // 소셜 로그인 실패 시 핸들러 설정
			.userInfoEndpoint().userService(customOAuth2UserService); // customUserService 설정

		// 원래 스프링 시큐리티 필터 순서가 LogoutFilter 이후에 로그인 필터 동작
		// 따라서, LogoutFilter 이후에 우리가 만든 필터 동작하도록 설정
		// 순서 : LogoutFilter -> JwtAuthenticationProcessingFilter -> CustomJsonUsernamePasswordAuthenticationFilter
		http.addFilterAfter(customJsonUsernamePasswordAuthenticationFilter(), LogoutFilter.class);
		// http.addFilterAfter()
		http.addFilterBefore(jwtAuthenticationProcessingFilter(), CustomJsonAuthenticationFilter.class);
		// http.addFilterBefore(oAuth2AccessTokenAuthenticationFilter(), JwtAuthenticationProcessingFilter.class);

		return http.build();
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.addAllowedMethod("*");
		corsConfiguration.addAllowedMethod(HttpMethod.OPTIONS);
		corsConfiguration.addAllowedHeader("*");
		corsConfiguration.addAllowedOrigin("*");
		corsConfiguration.setMaxAge(7200L);
		corsConfiguration.addExposedHeader("Authorization");
		corsConfiguration.addExposedHeader("Authorization-refresh");
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfiguration);
		return source;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}

	/**
	 * AuthenticationManager 설정 후 등록
	 * PasswordEncoder를 사용하는 AuthenticationProvider 지정 (PasswordEncoder는 위에서 등록한 PasswordEncoder 사용)
	 * FormLogin(기존 스프링 시큐리티 로그인)과 동일하게 DaoAuthenticationProvider 사용
	 * UserDetailsService는 커스텀 LoginService로 등록
	 * 또한, FormLogin과 동일하게 AuthenticationManager로는 구현체인 ProviderManager 사용(return ProviderManager)
	 *
	 */
	@Bean
	public AuthenticationManager authenticationManager() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(passwordEncoder());
		provider.setUserDetailsService(loginService);
		return new ProviderManager(provider);
	}

	// @Bean
	// public AuthenticationManager accessTokenAuthenticationProvider() {
	// 	DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
	// 	provider.setPasswordEncoder(passwordEncoder());
	// 	provider.setUserDetailsService(loginService);
	// 	return new ProviderManager(provider);
	// }

	/**
	 * 로그인 성공 시 호출되는 LoginSuccessJWTProviderHandler 빈 등록
	 */
	@Bean
	public LoginSuccessHandler loginSuccessHandler() {
		return new LoginSuccessHandler(jwtService, fanRepository, artistRepository);
	}

	/**
	 * 로그인 실패 시 호출되는 LoginFailureHandler 빈 등록
	 */
	@Bean
	public OAuth2LoginFailureHandler oAuth2LoginFailureHandler() {
		return new OAuth2LoginFailureHandler();
	}

	/**
	 * 로그인 성공 시 호출되는 LoginSuccessJWTProviderHandler 빈 등록
	 */
	@Bean
	public OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler() {
		return new OAuth2LoginSuccessHandler(jwtService, fanRepository);
	}

	/**
	 * 로그인 실패 시 호출되는 LoginFailureHandler 빈 등록
	 */
	@Bean
	public LoginFailureHandler loginFailureHandler() {
		return new LoginFailureHandler();
	}

	/**
	 * CustomJsonUsernamePasswordAuthenticationFilter 빈 등록
	 * 커스텀 필터를 사용하기 위해 만든 커스텀 필터를 Bean으로 등록
	 * setAuthenticationManager(authenticationManager())로 위에서 등록한 AuthenticationManager(ProviderManager) 설정
	 * 로그인 성공 시 호출할 handler, 실패 시 호출할 handler로 위에서 등록한 handler 설정
	 */
	@Bean
	public CustomJsonAuthenticationFilter customJsonUsernamePasswordAuthenticationFilter() {
		CustomJsonAuthenticationFilter customJsonUsernamePasswordLoginFilter
			= new CustomJsonAuthenticationFilter(objectMapper);
		customJsonUsernamePasswordLoginFilter.setAuthenticationManager(authenticationManager());
		customJsonUsernamePasswordLoginFilter.setAuthenticationSuccessHandler(loginSuccessHandler());
		customJsonUsernamePasswordLoginFilter.setAuthenticationFailureHandler(loginFailureHandler());
		return customJsonUsernamePasswordLoginFilter;
	}

	// @Bean
	// public OAuth2AccessTokenAuthenticationFilter oAuth2AccessTokenAuthenticationFilter() {
	// 	OAuth2AccessTokenAuthenticationFilter oAuth2AccessTokenAuthenticationFilter
	// 		= new OAuth2AccessTokenAuthenticationFilter(objectMapper);
	// 	oAuth2AccessTokenAuthenticationFilter.setAuthenticationManager(authenticationManager());
	// 	oAuth2AccessTokenAuthenticationFilter.setAuthenticationSuccessHandler(oAuth2LoginSuccessHandler());
	// 	oAuth2AccessTokenAuthenticationFilter.setAuthenticationFailureHandler(oAuth2LoginFailureHandler());
	// 	return oAuth2AccessTokenAuthenticationFilter;
	// }

	@Bean
	public JwtAuthenticationProcessingFilter jwtAuthenticationProcessingFilter() {
		JwtAuthenticationProcessingFilter jwtAuthenticationFilter = new JwtAuthenticationProcessingFilter(jwtService,
			fanRepository, artistRepository);
		return jwtAuthenticationFilter;
	}
}
