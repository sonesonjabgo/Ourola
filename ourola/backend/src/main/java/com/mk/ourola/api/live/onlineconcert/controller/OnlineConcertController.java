package com.mk.ourola.api.live.onlineconcert.controller;

import java.util.UUID;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.live.onlinecall.repository.dto.OnlineCallDto;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.live.onlineconcert.service.OnlineConcertServiceImpl;
import com.mk.ourola.api.live.ovenvidu.service.OpenViduServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/online-concert")
public class OnlineConcertController {
	private final OnlineConcertServiceImpl onlineConcertService;
	private final OpenViduServiceImpl openViduService;

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

	
}
