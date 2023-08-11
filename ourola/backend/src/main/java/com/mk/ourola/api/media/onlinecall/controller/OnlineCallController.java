package com.mk.ourola.api.media.onlinecall.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallDto;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallWinner;
import com.mk.ourola.api.media.onlinecall.service.OnlineCallServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class OnlineCallController {

	private final OnlineCallServiceImpl onlineCallService;
	private final JwtService jwtService;

	/**
	 * @writeOnlineCall 영상통화 정보를 저장하는 메서드
	 * @param OnlineCallDto 테이블에 저장되는 정보
	 * @return 저장된 Dto 객체
	 */
	@PostMapping("/onlinecall/write")
	public ResponseEntity<?> writeOnlineCall(@RequestBody OnlineCallDto onlineCallDto) {
		try {
			UUID sessionId = UUID.randomUUID();
			onlineCallDto.setSessionId(sessionId.toString());
			OnlineCallDto saved = onlineCallService.writeOnlineCall(onlineCallDto);
			return new ResponseEntity<>(saved, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * @getOnlineCall 영상통화 정보를 저장하는 메서드
	 * @return 영상통화 목록 Dto 리스트
	 */
	@GetMapping("/onlinecall/list")
	public ResponseEntity<?> getOnlineCall() {
		try {
			List<OnlineCallDto> onlineCallDtoList = onlineCallService.getOnlineCall();
			return new ResponseEntity<>(onlineCallDtoList, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/onlinecall/check/{callId}")
	public ResponseEntity<?> checkOnlineCall(@RequestHeader("Authorization") String header,
		@PathVariable String callId){
		try {
			Integer userId = jwtService.accessTokenToUserId(header);
			OnlineCallWinner isCheck = onlineCallService.checkOnlineCall(userId, callId);
			return new ResponseEntity<>(isCheck, HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
