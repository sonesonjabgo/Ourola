package com.mk.ourola.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.repository.dto.FanFeedDto;
import com.mk.ourola.service.FanFeedService;

@RestController
@RequestMapping("{artist}/fanfeed")
public class FanFeedController {

	@Autowired
	private FanFeedService fanFeedService;

	@RequestMapping("")
	public ResponseEntity<List<FanFeedDto>> getAllFeed() {
		List<FanFeedDto> fanFeedList = fanFeedService.getAllFeed();
		return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
	}
}
