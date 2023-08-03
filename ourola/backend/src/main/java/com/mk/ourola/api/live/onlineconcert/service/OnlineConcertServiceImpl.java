package com.mk.ourola.api.live.onlineconcert.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.live.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OnlineConcertServiceImpl implements OnlineConcertService {

	private final OnlineConcertRepository onlineConcertRepository;
	private final GroupRepository groupRepository;
	
	@Override
	public OnlineConcertDto writeOnlineConcert(OnlineConcertDto onlineConcertDto) {
		return onlineConcertRepository.save(onlineConcertDto);
	}

	@Override
	public List<OnlineConcertDto> getAllOnlineConcert(String groupName) {
		GroupDto group = groupRepository.findByName(groupName);
		return onlineConcertRepository.findByGroupDto_Id(group.getId());
	}

	@Override
	public OnlineConcertDto getOnlineConcert(String sessionId) {
		return onlineConcertRepository.findBySessionId(sessionId);
	}

}
