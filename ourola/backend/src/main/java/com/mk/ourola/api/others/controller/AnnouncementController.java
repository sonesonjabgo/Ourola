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
import com.mk.ourola.api.others.service.AnnouncementService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("{artist}/announcement")
@RequiredArgsConstructor
public class AnnouncementController {

	private final AnnouncementService announcementService;

	@GetMapping("/list")
	public ResponseEntity<List<AnnouncementDto>> getAllAnnouncement(@PathVariable("artist") String artist) {
		try {
			return new ResponseEntity<List<AnnouncementDto>>(announcementService.getAllAnnouncement(artist),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/read/{announcementId}")
	public ResponseEntity<AnnouncementDto> getAnnouncement(@PathVariable("artist") String artist,
		@PathVariable("announcementId") int announcementId) { // 이거 artist 받을 필요 없나?
		try {
			return new ResponseEntity<AnnouncementDto>(announcementService.getAnnouncement(artist, announcementId),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/write")
	public ResponseEntity<AnnouncementDto> writeAnnouncement(@PathVariable("artist") String artist,
		@RequestHeader String accessToken,
		@RequestBody AnnouncementDto announcementDto) {
		try {
			AnnouncementDto result = announcementService.writeAnnouncement(artist, accessToken,
				announcementDto);
			return new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/modify/{announcementId}")
	public ResponseEntity<String> modifyAnnouncement(@PathVariable("artist") String artist,
		@PathVariable("announcementId") int announcementId, @RequestHeader String accessToken,
		@RequestBody AnnouncementDto announcementDto) {
		try {
			announcementService.modifyAnnouncement(artist, announcementId, accessToken, announcementDto);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/remove/{announcementId}")
	public ResponseEntity<String> removeAnnouncement(@PathVariable("artist") String artist,
		@PathVariable("announcementId") int announcementId,
		@RequestHeader String accessToken) {
		try {
			announcementService.removeAnnouncement(artist, announcementId, accessToken);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
