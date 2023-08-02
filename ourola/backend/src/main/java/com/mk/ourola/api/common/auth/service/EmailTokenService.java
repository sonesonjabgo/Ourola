package com.mk.ourola.api.common.auth.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.common.auth.repository.EmailTokenDto;
import com.mk.ourola.api.common.auth.repository.EmailTokenRepository;

import io.jsonwebtoken.lang.Assert;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailTokenService {
	private final EmailSenderService emailSenderService;
	private final EmailTokenRepository emailTokenRepository;

	// 이메일 인증 토큰 생성
	public String createEmailToken(Integer fanId, String receiverEmail) {

		Assert.notNull(fanId, "memberId는 필수입니다");
		Assert.hasText(receiverEmail, "receiverEmail은 필수입니다.");

		// 이메일 토큰 저장
		EmailTokenDto emailToken = EmailTokenDto.createEmailToken(fanId);
		emailTokenRepository.save(emailToken);

		// 이메일 전송
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(receiverEmail);
		mailMessage.setSubject("[ourola] 이메일 인증");
		// mailMessage.setText("http://localhost:8000/confirm-email?token=" + emailToken.getId());
		mailMessage.setText(emailToken.getId());
		emailSenderService.sendEmail(mailMessage);

		return emailToken.getId();    // 인증메일 전송 시 토큰 반환
	}

	// 유효한 토큰 가져오기
	public Optional<EmailTokenDto> findByIdAndExpirationDateAfterAndExpired(String emailTokenId) throws Exception {
		Optional<EmailTokenDto> emailToken = emailTokenRepository
			.findByIdAndExpirationDateAfterAndExpired(emailTokenId, LocalDateTime.now(), false);

		// 토큰이 없다면 예외 발생
		return emailToken;
	}
}
