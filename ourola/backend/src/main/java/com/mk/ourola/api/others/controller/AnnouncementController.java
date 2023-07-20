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

	@PostMapping("/write") // Token 따로 DB에 있으니까 Token 정보 Decoding 할 필요 없을 듯
	public ResponseEntity<String> writeAnnouncement(@PathVariable String artist, @RequestHeader String accessToken,
		@RequestBody AnnouncementDto announcementDto) {
		try {
			announcementService.writeAnnouncement(artist, accessToken, announcementDto);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
