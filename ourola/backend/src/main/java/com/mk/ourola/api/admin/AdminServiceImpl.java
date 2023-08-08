package com.mk.ourola.api.admin;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

	private final ArtistRepository artistRepository;
	private final FanRepository fanRepository;
	private final GroupRepository groupRepository;

	@Override
	public List<?> getAllUserList() throws Exception {
		return fanRepository.getAllUserList();
	}

	@Override
	public List<ArtistDto> getAllArtistList() throws Exception {
		return artistRepository.findAll();
	}

	@Override
	public List<FanDto> getAllFanList() throws Exception {
		return fanRepository.findAll();
	}

	@Override
	public List<ArtistDto> getAllArtistList(String group) throws Exception {
		GroupDto groupDto = groupRepository.findByName(group);
		return artistRepository.findByGroupDto_Id(groupDto.getId());
	}

	@Override
	public List<FanDto> getAllFanListInGroup(String group) throws Exception {
		GroupDto groupDto = groupRepository.findByName(group);
		return fanRepository.findFanDtoBySubscribeChannel(groupDto.getId());
	}

	@Override
	public FanDto getFan(int id) throws Exception {
		return fanRepository.findById(id).orElseThrow();
	}

	@Override
	public ArtistDto getArtist(int id) throws Exception {
		return artistRepository.findById(id).orElseThrow();
	}

	@Override
	public ArtistDto setChannelAdmin(int id) throws Exception {
		ArtistDto artistDto = artistRepository.findById(id).orElseThrow();
		artistDto.setIsAdmin(true);
		artistDto.setRole(Role.CHANNEL_ADMIN);
		return artistRepository.save(artistDto);
	}
}
