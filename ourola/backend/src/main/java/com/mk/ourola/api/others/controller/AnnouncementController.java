package com.mk.ourola.api.others.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.others.repository.dto.AnnouncementDto;
import com.mk.ourola.api.others.service.AnnouncementServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("{group}/announcement")
@RequiredArgsConstructor
public class AnnouncementController {

	private final AnnouncementServiceImpl announcementService;

	// 게시판 첫 접속 시 전체 공지 정보를 보내는 메서드
	@GetMapping("/list")
	public ResponseEntity<List<AnnouncementDto>> getAllAnnouncement(@PathVariable("group") String groupName) {
		try {
			return new ResponseEntity<List<AnnouncementDto>>(announcementService.getAllAnnouncement(groupName),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 선택된 하나의 공지의 정보를 보내는 메서드
	@GetMapping("/read/{announcementId}")
	public ResponseEntity<AnnouncementDto> getAnnouncement(@PathVariable("group") String groupName,
		@PathVariable("announcementId") int announcementId) {
		try {
			return new ResponseEntity<AnnouncementDto>(announcementService.getAnnouncement(groupName, announcementId),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 소속사 직원이 공지를 만드는 메서드
	@PostMapping("/write")
	public ResponseEntity<AnnouncementDto> writeAnnouncement(@PathVariable("group") String groupName,
		@RequestHeader String accessToken,
		@RequestBody AnnouncementDto announcementDto) {
		try {
			return new ResponseEntity<>(announcementService.writeAnnouncement(groupName, accessToken,
				announcementDto), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 소속사 직원이 공지 제목 혹은 내용을 바꾸는 메서드
	@PutMapping("/modify/{announcementId}")
	public ResponseEntity<AnnouncementDto> modifyAnnouncement(@PathVariable("group") String groupName,
		@PathVariable("announcementId") int announcementId, @RequestHeader String accessToken,
		@RequestBody AnnouncementDto announcementDto) {
		try {
			return new ResponseEntity<AnnouncementDto>(
				announcementService.modifyAnnouncement(groupName, announcementId, accessToken, announcementDto),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 소속사 직원이 공지를 지우는 메서드
	@DeleteMapping("/remove/{announcementId}")
	public ResponseEntity<String> removeAnnouncement(@PathVariable("group") String groupName,
		@PathVariable("announcementId") int announcementId,
		@RequestHeader String accessToken) {
		try {
			announcementService.removeAnnouncement(groupName, announcementId, accessToken);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
