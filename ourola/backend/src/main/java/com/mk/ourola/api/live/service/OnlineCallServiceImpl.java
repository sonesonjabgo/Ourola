package com.mk.ourola.api.live.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.live.repository.OnlineCallRepository;
import com.mk.ourola.api.live.repository.dto.OnlineCallDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OnlineCallServiceImpl implements OnlineCallService {

	private final OnlineCallRepository onlineCallRepository;

	@Override
	public OnlineCallDto writeOnlineCall(OnlineCallDto onlineCallDto) {
		OnlineCallDto saved = onlineCallRepository.save(onlineCallDto);
		return saved;
	}

	@Override
	public List<OnlineCallDto> getOnlineCall() {
		List<OnlineCallDto> all = onlineCallRepository.findAll();
		return all;
	}
}
