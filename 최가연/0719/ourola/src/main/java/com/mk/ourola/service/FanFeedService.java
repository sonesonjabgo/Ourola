package com.mk.ourola.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mk.ourola.repository.FanFeedRepository;
import com.mk.ourola.repository.dto.FanFeedDto;

@Service
public class FanFeedService {

	@Autowired
	private FanFeedRepository fanFeedRepository;

	public List<FanFeedDto> getAllFeed() {
		return fanFeedRepository.findAll();
	}
}
