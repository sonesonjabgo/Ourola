package com.mk.ourola.api.media.onlinecall.service;

import java.util.List;

import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallDto;
import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallWinner;

public interface OnlineCallService {

	public OnlineCallDto writeOnlineCall(OnlineCallDto onlineCallDto);

	OnlineCallDto getOnlineCall();

	OnlineCallWinner checkOnlineCall(Integer userId, Integer callId) throws Exception;
}
