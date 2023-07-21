package com.mk.ourola.api.artist.service;

import java.util.List;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

public interface GroupSearchService {

	public List<GroupChannelDto> searchGroup(String groupName);

}
