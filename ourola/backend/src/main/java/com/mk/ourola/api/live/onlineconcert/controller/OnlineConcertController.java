package com.mk.ourola.api.live.onlineconcert.controller;

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

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.live.onlineconcert.service.OnlineConcertServiceImpl;
import com.mk.ourola.api.live.ovenvidu.service.OpenViduServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{group}/online-concert")
public class OnlineConcertController {
	private final OnlineConcertServiceImpl onlineConcertService;
	private final OpenViduServiceImpl openViduService;

	// FIXME : 온라인콘서트 등록 추후 수정 필요...!
	@PostMapping("/write")
	public ResponseEntity<OnlineConcertDto> writeOnlineConert(@RequestBody OnlineConcertDto onlineConcertDto) {
		try {
			UUID sessionId = UUID.randomUUID();
			onlineConcertDto.setSessionId(sessionId.toString());
			OnlineConcertDto saved = onlineConcertService.writeOnlineConcert(onlineConcertDto);
			return new ResponseEntity<>(saved, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/list")
	public ResponseEntity<List<OnlineConcertDto>> getAllOnlineConcert(@PathVariable String group) {
		try {
			return new ResponseEntity<List<OnlineConcertDto>>(onlineConcertService.getAllOnlineConcert(group), HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions")
	public ResponseEntity<String> initializeSession(@RequestHeader("Authorization") String accessToken, @RequestBody(required = false) Map<String, Object> params) {
		try {
			return new ResponseEntity<String>(openViduService.initializeSession(params), HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions/{sessionId}/connections")
	public ResponseEntity<String> createConnection(@RequestHeader("Authorization") String accessToken, @PathVariable("sessionId") String sessionId,
		@RequestBody(required = false) Map<String, Object> params) {
		try {
			String connection = openViduService.createConnection(sessionId, params);
			if(connection == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<String>(connection, HttpStatus.OK);
			}
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
