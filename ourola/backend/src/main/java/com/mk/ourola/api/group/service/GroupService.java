package com.mk.ourola.api.group.service;

import java.util.List;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

public interface GroupService {

	public List<GroupDto> getAllGroup();

	public List<GroupDto> searchGroup(String groupName);

	public List<ArtistDto> getGroupArtistList(String groupName);

	GroupDto writeGroup(GroupDto groupDto);
}
