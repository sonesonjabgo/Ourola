package com.mk.ourola.api.group.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {
	private final GroupRepository groupRepository;

	private final ArtistRepository artistRepository;

	@Override
	public List<GroupDto> getAllGroup() {
		return groupRepository.findAll();
	}

	@Override
	public List<GroupDto> searchGroup(String groupName) {
		return groupRepository.findByNameContains(groupName);
	}

	@Override
	public List<ArtistDto> getGroupArtistList(String groupName) {
		System.out.println("그룹 멤버 목록 조회중 : " + groupName);
		GroupDto groupDto = groupRepository.findByName(groupName);
		System.out.println(groupDto);
		return artistRepository.findByGroupDto_IdAndIsAdminIsFalse(groupDto.getId());
	}

	@Override
	public GroupDto writeGroup(GroupDto groupDto) {
		return groupRepository.save(groupDto);
	}
}
