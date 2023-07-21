package com.mk.ourola.api.feed.service;

import java.util.List;

import com.mk.ourola.api.feed.repository.dto.FeedDto;

public interface FeedService {

	public List<FeedDto> getAllFeed(String artist);

	public FeedDto getFeed(String artist, int id);

	public FeedDto writeFeed(String artist, FeedDto fanFeedDto);

	public void removeFeed(Integer id);

	public FeedDto modifyFeed(FeedDto fanFeedDto);

	public List<FeedDto> getAllSpecificArtistFeed(String artist, int artistId) throws Exception;
}
