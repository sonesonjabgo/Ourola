package com.mk.ourola.api.feed.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;

import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;

public interface FeedService {

	public List<FeedDto> getAllFeed(String artist);

	public List<FeedDto> getAllFanFeed(String artist);

	public List<FeedDto> getAllArtistFeed(String artist);

	public FeedDto getFeed(String artist, int id);

	public FeedDto writeFeed(String artist, FeedDto fanFeedDto, String email);

	public void removeFeed(Integer id);

	public FeedDto modifyFeed(FeedDto fanFeedDto);

	public boolean modifyLike(Integer id, String accessToken) throws Exception;
	public List<LikeDto> getLikeList(String accessToken) throws Exception;

	public boolean getLike(Integer id, String accessToken) throws Exception;

	public List<FeedDto> getAllSpecificArtistFeed(int artistId) throws Exception;

	public List<FeedDto> getSpecificDateFeed(String group, Date startDate, Date endDate, Integer type) throws Exception;
}
