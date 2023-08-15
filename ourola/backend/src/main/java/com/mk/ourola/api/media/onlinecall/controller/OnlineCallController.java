package com.mk.ourola.api.media.onlinecall.controller;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.ovenvidu.service.OpenViduServiceImpl;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallDto;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallWinner;
import com.mk.ourola.api.media.onlinecall.service.OnlineCallServiceImpl;
import com.mk.ourola.api.others.openlive.service.OpenLiveService;
import com.mk.ourola.api.others.openlive.service.OpenLiveServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{group}/onlinecall")
public class OnlineCallController {

	private final OnlineCallServiceImpl onlineCallService;
	private final JwtService jwtService;
	private final OpenViduServiceImpl openViduService;

	/**
	 * @writeOnlineCall 영상통화 정보를 저장하는 메서드
	 * @param OnlineCallDto 테이블에 저장되는 정보
	 * @return 저장된 Dto 객체
	 */
	@PostMapping("/write")
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
	@GetMapping("/list")
	public ResponseEntity<?> getOnlineCall() {
		try {
			OnlineCallDto onlineCallDtoList = onlineCallService.getOnlineCall();
			return new ResponseEntity<>(onlineCallDtoList, HttpStatus.OK);

		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/check/{callId}")
	public ResponseEntity<?> checkOnlineCall(@RequestHeader("Authorization") String header,
		@PathVariable Integer callId){
		try {
			System.out.println(callId);
			Integer userId = jwtService.accessTokenToUserId(header);
			OnlineCallWinner isCheck = onlineCallService.checkOnlineCall(userId, callId);
			return new ResponseEntity<>(isCheck, HttpStatus.OK);
		}catch (Exception e){
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions")
	public ResponseEntity<String> initializeSession(@RequestHeader("Authorization") String accessToken,
		@RequestBody(required = false) Map<String, Object> params) {
		try {
			return new ResponseEntity<String>(openViduService.initializeSession(params), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions/{sessionId}/connections")
	public ResponseEntity<String> createConnection(@RequestHeader("Authorization") String accessToken,
		@PathVariable("sessionId") String sessionId,
		@RequestBody(required = false) Map<String, Object> params) {
		try {
			String connection = openViduService.createConnection(sessionId, params);
			if (connection == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<String>(connection, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
