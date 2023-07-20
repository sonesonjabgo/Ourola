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

	// 팬 피드, 아티스트 포스트 컨트롤러

	private final FeedServiceImpl fanFeedService;

	// 해당 그룹의 모든 피드, 포스트를 불러오는 메서드
	@GetMapping("")
	public ResponseEntity<List<FanFeedDto>> getAllFeed(@PathVariable String artist) {
		try {
			List<FanFeedDto> fanFeedList = fanFeedService.getAllFeed(artist);
			return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 피드, 포스트를 작성하는 메서드
	@PostMapping("/write")
	public ResponseEntity<FanFeedDto> writeFeed(
		@PathVariable String artist,
		@RequestBody FanFeedDto fanFeedDto
	) {
		try {
			FanFeedDto fanFeedDtoResult = fanFeedService.writeFeed(artist, fanFeedDto);
			return new ResponseEntity<>(fanFeedDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 id의 피드, 포스트를 삭제하는 메서드
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<String> removeFeed(@PathVariable String artist, @PathVariable Integer id) {
		try {
			fanFeedService.removeFeed(id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 단일 피드, 포스트를 보는 메서드
	@GetMapping("/{id}")
	public ResponseEntity<FanFeedDto> getFeed(
		@PathVariable(name = "artist") String artist,
		@PathVariable(name = "id") int id
	) {
		try {
			FanFeedDto fanFeed = fanFeedService.getFeed(artist, id);
			return new ResponseEntity<>(fanFeed, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 id의 글을 수정하는 메서드
	@PostMapping("/modify/{id}")
	public ResponseEntity<FanFeedDto> modifyFeed(
		@PathVariable String artist,
		@PathVariable int id,
		@RequestBody FanFeedDto fanFeedDto
	) {
		try {
			fanFeedDto.setId(id);
			FanFeedDto modifiedFeed = fanFeedService.modifyFeed(fanFeedDto);
			return new ResponseEntity<>(modifiedFeed, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
