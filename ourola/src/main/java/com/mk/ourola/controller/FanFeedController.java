package com.mk.ourola.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.repository.dto.FanFeedDto;
import com.mk.ourola.service.FanFeedService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{artist}/feed")
public class FanFeedController {

	private final FanFeedService fanFeedService;

	@GetMapping("/")
	public ResponseEntity<List<FanFeedDto>> getAllFeed(@PathVariable String artist) {
		System.out.println(artist);
		List<FanFeedDto> fanFeedList = fanFeedService.getAllFeed(artist);
		return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
	}
}
