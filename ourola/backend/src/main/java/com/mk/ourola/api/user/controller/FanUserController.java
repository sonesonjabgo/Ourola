package com.mk.ourola.api.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.user.repository.dto.FanUserSignUpDto;
import com.mk.ourola.api.user.repository.dto.NotificationDto;
import com.mk.ourola.api.user.repository.dto.SubscribeGroupDto;
import com.mk.ourola.api.user.service.FanUserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FanUserController {
	private final FanUserServiceImpl fanUserService;

	@PostMapping("/sign-up")
	public ResponseEntity<?> fanSignUp(@RequestBody FanUserSignUpDto fanUserSignUpDto) throws Exception {
		fanUserService.signUp(fanUserSignUpDto);
		return new ResponseEntity<String>("회원가입 성공", HttpStatus.OK);
	}

	// 사용자에게 온 알림을 반환
	@GetMapping("/notification")
	public ResponseEntity<?> getNotification(@RequestHeader String accessToken) {
		try {
			String email = accessToken;
			List<NotificationDto> notifications = fanUserService.getNotification(email);
			return new ResponseEntity<>(notifications, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 유저가 가입, 구독한 아티스트 채널 목록
	@GetMapping("/subscribechannel")
	public ResponseEntity<?> getSubscribeChannel(String userEmail){
		try{
			List<SubscribeGroupDto> subscribeChannelList = fanUserService.getSubscribeChannel(userEmail);
			return new ResponseEntity<>(subscribeChannelList, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
