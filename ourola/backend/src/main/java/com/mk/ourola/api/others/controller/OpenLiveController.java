package com.mk.ourola.api.others.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.others.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.service.OpenLiveService;
import com.mk.ourola.api.others.service.OpenLiveServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("{group}/open-live")
@RequiredArgsConstructor
@Slf4j
public class OpenLiveController {
	private final OpenLiveServiceImpl openLiveService;

	// 그룹 채널별 공개방송 리스트 조회
	@GetMapping("/list")
	public ResponseEntity<?> getOpenLiveList(@PathVariable String group) {
		try {
			return new ResponseEntity<>(openLiveService.getOpenLiveList(group), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 id로 개별 조회
	@GetMapping("/{id}")
	public ResponseEntity<?> getOpenLive(@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			return new ResponseEntity<>(openLiveService.getOpenLive(group, id), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 등록
	@PostMapping("")
	public ResponseEntity<?> writeOpenLive(@PathVariable String group, @RequestHeader("Authorization") String header, @RequestBody OpenLiveDto openLiveDto) {
		try {
			return new ResponseEntity<>(openLiveService.writeOpenLive(group, header, openLiveDto), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송에 신청
	@GetMapping("/participate/{id}")
	public ResponseEntity<?> writeOpenLiveParticipant(@PathVariable String group, @RequestHeader("Authorization") String header, @PathVariable("id") int id) {
		try {
			return new ResponseEntity<>(openLiveService.writeOpenLiveParticipant(group, header, id), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
