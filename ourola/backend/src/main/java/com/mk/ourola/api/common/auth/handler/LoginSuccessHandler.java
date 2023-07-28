package com.mk.ourola.api.common.auth.handler;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
	private final JwtService jwtService;
	// private final String role;
	private final FanRepository fanRepository;
	private final ArtistRepository artistRepository;

	@Value("${jwt.access.expiration}")
	private String accessTokenExpiration;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) {
		String email = extractUsername(authentication); // 인증 정보에서 Username(email) 추출
		String accessToken = jwtService.createAccessToken(email); // JwtService의 createAccessToken을 사용하여 AccessToken 발급
		String refreshToken = jwtService.createRefreshToken(); // JwtService의 createRefreshToken을 사용하여 RefreshToken 발급
		Optional<String> role = jwtService.extractRole(accessToken);
		log.info("로그인 : userEmail : {}, userRole : {}", jwtService.extractEmail(accessToken), role);

		jwtService.sendAccessAndRefreshToken(response, accessToken,
			refreshToken); // 응답 헤더에 AccessToken, RefreshToken 실어서 응답

		// log.info(jwtService.extractRole(accessToken).get());
		if (jwtService.extractRole(accessToken).get().equals(Role.USER.getKey())) {
			// log.info("fan user "+refreshToken);
			fanRepository.findByEmail(email)
				.ifPresent(user -> {
					user.updateRefreshToken(refreshToken);
					fanRepository.saveAndFlush(user);
				});
		} else {
			// log.info("artist user "+refreshToken);
			artistRepository.findByEmail(email)
				.ifPresent(user -> {
					user.updateRefreshToken(refreshToken);
					artistRepository.saveAndFlush(user);
				});
		}
		log.info("로그인에 성공하였습니다. 이메일 : {}", email);
		log.info("로그인에 성공하였습니다. AccessToken : {}", accessToken);
		log.info("발급된 AccessToken 만료 기간 : {}", accessTokenExpiration);
	}

	private String extractUsername(Authentication authentication) {
		UserDetails userDetails = (UserDetails)authentication.getPrincipal();
		return userDetails.getUsername();
	}
}
