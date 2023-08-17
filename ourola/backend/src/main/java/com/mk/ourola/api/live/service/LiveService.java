package com.mk.ourola.api.live.service;

import java.util.List;

import com.mk.ourola.api.live.repository.Dto.LiveDto;

public interface LiveService {
	LiveDto writeLive(LiveDto liveDto, Integer userId, String group) throws Exception;

	List<LiveDto> getAllLive(String groupName) throws Exception;

	LiveDto getLive(String sessionId) throws Exception;

	void removeLive(int liveId) throws Exception;
}
