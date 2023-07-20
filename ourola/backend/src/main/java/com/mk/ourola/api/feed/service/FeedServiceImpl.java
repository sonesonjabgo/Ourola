package com.mk.ourola.api.feed.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.dto.FanFeedDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedServiceImpl implements FeedService{

	private final FeedRepository fanFeedRepository;

	private final GroupRepository groupRepository;

	public List<FanFeedDto> getAllFeed(String artist) {
		System.out.println(artist + "서비스");
		int groupId = groupRepository.findByName(artist).getId();
		System.out.println(groupId);
		return fanFeedRepository.findByGroupChannelDto_Id(groupId);
	}

	public FanFeedDto getFeed(String artist, int id) {
		System.out.println(artist + "서비스");
		return fanFeedRepository.findById(id);
	}

	public FanFeedDto writeFeed(String artist, FanFeedDto fanFeedDto) {
		fanFeedDto.setGroupChannelDto(groupRepository.findByName(artist));
		return fanFeedRepository.save(fanFeedDto);
	}

	public void removeFeed(Integer id) {
		fanFeedRepository.deleteById(id);
	}

	public FanFeedDto modifyFeed(FanFeedDto fanFeedDto) {
		return fanFeedRepository.save(fanFeedDto);
	}

}
