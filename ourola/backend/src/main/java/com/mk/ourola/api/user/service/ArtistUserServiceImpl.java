package com.mk.ourola.api.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArtistUserServiceImpl implements ArtistUserService {

	private final ArtistUserRepository artistUserRepository;
	private final GroupRepository groupRepository;

	@Override
	public List<ArtistUserDto> getGroupArtistList(String groupName) {
		GroupChannelDto groupDto = groupRepository.findByName(groupName);
		return artistUserRepository.findByGroupChannelDto_Id(groupDto.getId());
	}
}
