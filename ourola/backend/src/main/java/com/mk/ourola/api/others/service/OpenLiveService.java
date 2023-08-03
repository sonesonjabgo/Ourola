package com.mk.ourola.api.others.service;

import java.util.List;

import com.mk.ourola.api.others.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.repository.dto.OpenLiveParticipantDto;

public interface OpenLiveService {
	public List<OpenLiveDto> getOpenLiveList(String artist);

	public OpenLiveDto getOpenLive(String artist, int id);

	public OpenLiveDto writeOpenLive(String artist, String header, OpenLiveDto openLiveDto) throws Exception;

	public OpenLiveParticipantDto writeOpenLiveParticipant(String artist, String accessToken, int id) throws Exception;
}
