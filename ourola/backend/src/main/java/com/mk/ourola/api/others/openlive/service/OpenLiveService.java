package com.mk.ourola.api.others.openlive.service;


import java.util.Date;
import java.util.List;

import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
public interface OpenLiveService {
	public Page<OpenLiveDto> getOpenLiveList(String group, Date currentTime, Pageable pageable);

	public OpenLiveDto getOpenLive(String artist, int id);

	public OpenLiveDto writeOpenLive(String artist, String header, OpenLiveDto openLiveDto) throws Exception;

	public OpenLiveParticipantDto writeOpenLiveParticipate(String artist, String accessToken, int id) throws Exception;

	Integer cancelOpenLiveParticipate(Integer userId, int id);

	int getParticipateRank(Integer userId, int openLiveId);
}
