package com.mk.ourola.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.repository.FanFeedRepository;
import com.mk.ourola.repository.GroupRepository;
import com.mk.ourola.repository.dto.FanFeedDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FanFeedService {

	private final FanFeedRepository fanFeedRepository;

	private final GroupRepository groupRepository;

	public List<FanFeedDto> getAllFeed(String artist) {
		System.out.println(artist + "서비스");
		int groupId = groupRepository.findByName(artist).getId();
		System.out.println(groupId);
		return fanFeedRepository.findByGroupChannelDto_Id(groupId);
	}

	public FanFeedDto getFeed(String artist, String id) {
		System.out.println(artist + "서비스");
		int groupId = groupRepository.findByName(artist).getId();
		System.out.println(groupId);
		return fanFeedRepository.findById(groupId);
	}

	public FanFeedDto writeFeed(FanFeedDto fanFeedDto) {
		System.out.println(fanFeedDto);
		return fanFeedRepository.save(fanFeedDto);
	}

	public void removeFeed(Integer id) {
		fanFeedRepository.deleteById(id);
	}

}
