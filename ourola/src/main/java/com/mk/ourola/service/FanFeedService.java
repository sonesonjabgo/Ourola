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
}
