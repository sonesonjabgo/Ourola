package com.mk.ourola.api.live.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.live.repository.Dto.LiveDto;
import com.mk.ourola.api.live.repository.LiveRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LiveServiceImpl implements LiveService {

	private final LiveRepository liveRepository;
	private final GroupRepository groupRepository;
	private final ArtistRepository artistRepository;

	@Override
	public LiveDto writeLive(LiveDto liveDto, Integer userId, String group) throws Exception {
		GroupDto groupDto = groupRepository.findByName(group);
		Optional<ArtistDto> artistDto = artistRepository.findById(userId);
		UUID sessionId = UUID.randomUUID();
		liveDto.setArtistDto(artistDto.get());
		liveDto.setGroupDto(groupDto);
		liveDto.setSessionId(sessionId.toString());
		return liveRepository.save(liveDto);
	}

	@Override
	public List<LiveDto> getAllLive(String groupName) throws Exception {
		GroupDto group = groupRepository.findByName(groupName);
		return liveRepository.findByGroupDto_Id(group.getId());
	}

	@Override
	public LiveDto getLive(String sessionId) throws Exception {
		return liveRepository.findBySessionId(sessionId);
	}

	@Override
	public void removeLive(int liveId) throws Exception {
		liveRepository.deleteById(liveId);
		return;
	}
}
