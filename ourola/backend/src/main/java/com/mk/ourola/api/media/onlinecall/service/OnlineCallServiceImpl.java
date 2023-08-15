package com.mk.ourola.api.media.onlinecall.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.media.onlinecall.repository.OnlineCallRepository;
import com.mk.ourola.api.media.onlinecall.repository.OnlineCallWinnerRepository;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallDto;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallWinner;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OnlineCallServiceImpl implements OnlineCallService {

	private final OnlineCallRepository onlineCallRepository;
	private final OnlineCallWinnerRepository onlineCallWinnerRepository;

	@Override
	public OnlineCallDto writeOnlineCall(OnlineCallDto onlineCallDto) {
		OnlineCallDto saved = onlineCallRepository.save(onlineCallDto);
		return saved;
	}

	@Override
	public OnlineCallDto getOnlineCall() {
		OnlineCallDto onlineCallDto = onlineCallRepository.findTopByOrderByStartDateDesc();
		return onlineCallDto;
	}

	@Override
	public OnlineCallWinner checkOnlineCall(Integer userId, Integer callId) throws Exception {
		OnlineCallWinner byFanDtoIdAndOnlineCallDtoId = onlineCallWinnerRepository.findByFanDto_IdAndOnlineCallDto_Id(
			userId, callId);
		if(byFanDtoIdAndOnlineCallDtoId == null){
			throw new Exception("영상통화 혹은 유저 정보가 잘못되었습니다.");
		}
		return byFanDtoIdAndOnlineCallDtoId;
	}
}
