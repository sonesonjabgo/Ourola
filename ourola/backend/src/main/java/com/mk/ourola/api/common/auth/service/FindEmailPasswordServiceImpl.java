package com.mk.ourola.api.common.auth.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.common.auth.repository.EmailTokenDto;
import com.mk.ourola.api.common.auth.repository.EmailTokenRepository;
import com.mk.ourola.api.common.auth.repository.FindEmailDto;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FindEmailPasswordServiceImpl implements FindEmailPasswordService {
	private final FanRepository fanRepository;
	private final EmailService emailService;
	private final EmailTokenService emailTokenService;
	private final PasswordEncoder passwordEncoder;
	private final EmailTokenRepository emailTokenRepository;

	@Override
	public String findEmail(FindEmailDto findEmailDto) throws Exception {
		// Date date = Date.parse(findEmailDto.getBirthday(), findEmailDto.getBirthday());

		// return date.toString();
		Optional<FanDto> findFan = fanRepository.findByNameAndBirthdayAndTel(
			findEmailDto.getName(),
			findEmailDto.getBirthday(),
			findEmailDto.getTel()
		);
		// System.out.println("findEmailDto : "+findEmailDto);
		// System.out.println("findFan : "+findFan);

		if(findFan.isPresent()) {
			FanDto fanDto = findFan.get();
			return fanDto.getEmail();
		} else {
			throw new Exception("해당하는 회원 정보를 찾을 수 없습니다.");
		}
	}

	@Override
	public void findPassword(String email) throws Exception {
		Optional<FanDto> fanDto = fanRepository.findByEmail(email);
		if(fanDto.isPresent()) {
			emailTokenService.createEmailToken(fanDto.get().getId(), email);
		} else {
			throw new Exception("이메일을 다시 확인해주세요.");
		}
	}

	@Override
	public boolean verifyToken(String token) throws Exception {
		Optional<EmailTokenDto> emailToken = emailTokenService.findByIdAndExpirationDateAfterAndExpired(token);

		// return emailToken.isPresent().orElseThrow(() -> new Exception("토큰이 존재하지 않습니다."));
		if(emailToken.isPresent()) {
			EmailTokenDto emailTokenDto = emailToken.get();
			// emailTokenDto.setChecked(true);
			emailTokenDto.setTokenToUsed();
			emailTokenRepository.save(emailTokenDto);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void modifyPassword(String token, String newPassword) throws Exception {
		Optional<EmailTokenDto> emailTokenDto = emailTokenRepository.findById(token);
		// FanDto fan = fanRepository.findByEmail(email).get();
		// 	.orElseThrow(() -> new Exception("존재하지 않는 사용자"));
		//
		// Optional<EmailTokenDto> emailTokenDto = emailTokenRepository.findByFanIdAndExpirationDateAfterAndExpired(fan.getId(), LocalDateTime.now(), true);

		if(emailTokenDto.isPresent()) {
			EmailTokenDto emailToken = emailTokenDto.get();
			FanDto fan = fanRepository.findById(emailToken.getFanId()).get();
			fan.setPassword(newPassword);
			fan.passwordEncode(passwordEncoder);
			fanRepository.save(fan);
		} else {
			throw new Exception("비밀번호를 변경할 수 없습니다. 다시 인증해주세요.");
		}
	}

}
