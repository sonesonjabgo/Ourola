package com.mk.ourola.api.fan.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.dto.FanSignUpDto;
import com.mk.ourola.api.fan.repository.dto.NotificationDto;
import com.mk.ourola.api.fan.repository.dto.SubscribeGroupDto;
import com.mk.ourola.api.fan.service.FanServiceImpl;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/fan")
public class FanController {
	private final FanServiceImpl fanService;
	private final JwtService jwtService;

	@PostMapping("/sign-up")
	public ResponseEntity<?> fanSignUp(@RequestBody FanSignUpDto fanSignUpDto) throws Exception {
		fanService.signUp(fanSignUpDto);
		return new ResponseEntity<String>("회원가입 성공", HttpStatus.OK);
	}

	// 사용자에게 온 알림을 반환
	@GetMapping("/notification")
	public ResponseEntity<?> getNotification(@RequestHeader("Authorization") String accessToken) {
		try {
			String email = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get()).get();
			List<NotificationDto> notifications = fanService.getNotification(email);
			return new ResponseEntity<>(notifications, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 유저가 가입, 구독한 아티스트 채널 목록
	@GetMapping("/subscribe")
	public ResponseEntity<?> getSubscribeGroup(@RequestHeader("Authorization") String accessToken) {
		try {
			int userId = jwtService.accessTokenToUserId(accessToken);
			List<SubscribeGroupDto> subscribeGroupList = fanService.getSubscribeGroup(userId);
			return new ResponseEntity<>(subscribeGroupList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 유저가 구독하지 않은 아티스트 채널 목록
	@GetMapping("/notsubscribe")
	public ResponseEntity<?> getNotSubscribeGroup(@RequestHeader("Authorization") String header) {
		try {
			String accessToken = jwtService.headerStringToAccessToken(header).get();
			String userEmail = jwtService.extractEmail(accessToken).get();
			List<GroupDto> subscribeGroupList = fanService.getNotSubscribeGroup(userEmail);
			return new ResponseEntity<>(subscribeGroupList, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
