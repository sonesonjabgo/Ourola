package com.mk.ourola.api.live.service;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

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

	@Override
	public LiveDto writeLive(LiveDto liveDto) throws Exception {
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
}
