package com.mk.ourola.api.live.onlineconcert.service;

import java.util.List;

import com.mk.ourola.api.live.onlinecall.service.OnlineCallService;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;

public interface OnlineConcertService {
	public OnlineConcertDto writeOnlineConcert(OnlineConcertDto onlineConcertDto);

	public List<OnlineConcertDto> getOnlineConcertList(String groupName);

	public OnlineConcertDto getOnlineConcert(String sessionId);
}
