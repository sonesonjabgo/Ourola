package com.mk.ourola.api.common.auth.handler;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.oauth2.CustomOAuth2User;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
	private final JwtService jwtService;
	private final FanRepository userRepository;

	private String REDIRECT_LOCATION = "http://localhost:3000/login/oauth2/code/kakao";

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws
		IOException,
		ServletException {

		log.info("OAuth2 Login 성공!");
		try {
			CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();

			// User의 Role이 GUEST일 경우 처음 요청한 회원이므로 회원가입 페이지로 리다이렉트
			// if(oAuth2User.getRole() == Role.GUEST) {
			// 	String accessToken = jwtService.createAccessToken(oAuth2User.getEmail());
			// 	response.addHeader(jwtService.getAccessHeader(), "Bearer " + accessToken);
			// 	response.sendRedirect("https://i9d204.p.ssafy.io");
			// 	// response.sendRedirect("oauth2/sign-up"); // 프론트의 회원가입 추가 정보 입력 폼으로 리다이렉트
			//
			// 	jwtService.sendAccessAndRefreshToken(response, accessToken, null);
			// 	               FanDto findUser = userRepository.findByEmail(oAuth2User.getEmail())
			// 	                               .orElseThrow(() -> new IllegalArgumentException("이메일에 해당하는 유저가 없습니다."));
			// 	               findUser.authorizeUser();
			// } else {
			loginSuccess(response, oAuth2User); // 로그인에 성공한 경우 access, refresh 토큰 생성
			// }
		} catch (Exception e) {
			throw e;
		}

	}

	// TODO : 소셜 로그인 시에도 무조건 토큰 생성하지 말고 JWT 인증 필터처럼 RefreshToken 유/무에 따라 다르게 처리해보기
	private void loginSuccess(HttpServletResponse response, CustomOAuth2User oAuth2User) throws IOException {
		String accessToken = jwtService.createAccessToken(oAuth2User.getEmail());
		String refreshToken = jwtService.createRefreshToken();
		response.addHeader(jwtService.getAccessHeader(), "Bearer " + accessToken);
		response.addHeader(jwtService.getRefreshHeader(), "Bearer " + refreshToken);

		response.sendRedirect(UriComponentsBuilder.fromUriString(REDIRECT_LOCATION)
			.queryParam("accessToken", accessToken)
			.queryParam("refreshToken",refreshToken)
			.build()
			.encode(StandardCharsets.UTF_8)
			.toUriString());

		jwtService.sendAccessAndRefreshToken(response, accessToken, refreshToken);
		jwtService.updateRefreshToken(oAuth2User.getEmail(), refreshToken);
	}
}
