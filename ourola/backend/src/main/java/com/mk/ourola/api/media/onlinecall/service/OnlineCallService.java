package com.mk.ourola.api.media.onlinecall.service;

import java.util.List;

import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallDto;

public interface OnlineCallService {

	public OnlineCallDto writeOnlineCall(OnlineCallDto onlineCallDto);

	public List<OnlineCallDto> getOnlineCall();
}
