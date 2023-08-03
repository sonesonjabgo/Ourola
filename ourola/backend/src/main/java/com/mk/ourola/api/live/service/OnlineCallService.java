package com.mk.ourola.api.live.service;

import java.util.List;

import com.mk.ourola.api.live.repository.dto.OnlineCallDto;

public interface OnlineCallService {

	public OnlineCallDto writeOnlineCall(OnlineCallDto onlineCallDto);

	public List<OnlineCallDto> getOnlineCall();
}
