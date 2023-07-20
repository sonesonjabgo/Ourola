package com.mk.ourola.api.feed.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.feed.repository.dto.FanFeedDto;

public interface FeedService {

	public List<FanFeedDto> getAllFeed(String artist);

	public FanFeedDto getFeed(String artist, int id);

	public FanFeedDto writeFeed(String artist,FanFeedDto fanFeedDto);

	public void removeFeed(Integer id);
	public FanFeedDto modifyFeed(FanFeedDto fanFeedDto);
}
