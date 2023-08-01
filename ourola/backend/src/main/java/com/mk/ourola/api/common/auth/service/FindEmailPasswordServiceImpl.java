package com.mk.ourola.api.common.auth.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.common.auth.repository.FindEmailDto;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FindEmailPasswordServiceImpl implements FindEmailPasswordService {
	private final FanRepository fanRepository;
	private final EmailService emailService;
	private final EmailTokenService emailTokenService;

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
}
