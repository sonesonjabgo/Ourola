package com.mk.ourola.api.artist.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GroupSearchServiceImpl implements GroupSearchService {
	private final GroupRepository groupRepository;

	@Override
	public List<GroupChannelDto> searchGroup(String groupName) {
		return groupRepository.findByNameContains(groupName);
	}
}
