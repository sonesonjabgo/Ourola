package com.mk.ourola.api.media.onlineconcert.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.media.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;

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
		return onlineConcertRepository.findByGroupDto_IdAndDeleted(group.getId(), false);
	}

	@Override
	public OnlineConcertDto getOnlineConcert(String sessionId) {
		return onlineConcertRepository.findBySessionId(sessionId);
	}

	@Override
	public boolean concertOpen(int concert_id, boolean open) {
		OnlineConcertDto concert = onlineConcertRepository.findById(concert_id);
		concert.setOpen(open);
		onlineConcertRepository.save(concert);
		return concert.isOpen();
	}
}
