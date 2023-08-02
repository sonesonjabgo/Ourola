package com.mk.ourola.api.common.auth.service;


import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.repository.EmailTokenDto;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class EmailService {

	private final EmailTokenService emailTokenService;
	private final FanRepository fanRepository;

	// @Transactional
	// public Boolean verifyEmail(String token) throws Exception {
	// 	// 이메일 토큰을 찾아옴
	// 	EmailTokenDto findEmailToken = emailTokenService.findByIdAndExpirationDateAfterAndExpired(token);
	//
	// 	// TODO: 여기서부터는 이메일 성공 인증 로직을 구현합니다.
	// 	// 지금 예시는 유저의 인증내용 변경하는 방법입니다.
	//
	// 	// 토큰의 유저 ID를 이용하여 유저 인증 정보를 가져온다.
	// 	Optional<FanDto> findUser = fanRepository.findById(findEmailToken.getFanId());
	// 	findEmailToken.setTokenToUsed();    // 사용 완료
	//
	// 	if (findUser.isPresent()) {
	// 		FanDto fanDto = findUser.get();
	// 		fanDto.setRole(Role.USER);
	// 		return true;
	// 	} else {
	// 		throw new Exception("토큰 에러");    // TODO: 토큰 에러
	// 	}
	// }
}