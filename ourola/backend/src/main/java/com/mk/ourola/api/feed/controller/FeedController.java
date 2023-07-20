package com.mk.ourola.api.feed.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.feed.repository.dto.FanFeedDto;
import com.mk.ourola.api.feed.service.FeedServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{artist}/feed")
public class FeedController {

	private final FeedServiceImpl fanFeedService;

	@GetMapping("")
	public ResponseEntity<List<FanFeedDto>> getAllFeed(@PathVariable String artist) {
		List<FanFeedDto> fanFeedList = fanFeedService.getAllFeed(artist);
		return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
	}

	@PostMapping("/write")
	public ResponseEntity<FanFeedDto> writeFeed(
		@PathVariable String artist,
		@RequestBody FanFeedDto fanFeedDto
	) {
		FanFeedDto fanFeedDtoResult = fanFeedService.writeFeed(artist, fanFeedDto);
		return new ResponseEntity<>(fanFeedDtoResult, HttpStatus.OK);
	}

	@DeleteMapping("/remove/{id}")
	public ResponseEntity<String> removeFeed(@PathVariable String artist, @PathVariable Integer id) {
		fanFeedService.removeFeed(id);
		return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<FanFeedDto> getFeed(
		@PathVariable(name = "artist") String artist,
		@PathVariable(name = "id") int id
	) {
		FanFeedDto fanFeed = fanFeedService.getFeed(artist, id);
		return new ResponseEntity<>(fanFeed, HttpStatus.OK);
	}

	@PostMapping("/modify/{id}")
	public ResponseEntity<FanFeedDto> modifyFeed(
		@PathVariable String artist,
		@PathVariable int id,
		@RequestBody FanFeedDto fanFeedDto
	) {
		fanFeedDto.setId(id);
		FanFeedDto modifiedFeed = fanFeedService.modifyFeed(fanFeedDto);
		return new ResponseEntity<>(modifiedFeed, HttpStatus.OK);
	}
}
