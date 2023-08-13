package com.mk.ourola.api.others.openlive.service;


import java.util.Date;
import java.util.List;

import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface OpenLiveService {
	public Page<OpenLiveDto> getOpenLiveList(String group, Date currentTime, Pageable pageable);

	public OpenLiveDto getOpenLive(String artist, int id);

	public boolean getOpenLiveParticipate(String header, int id) throws Exception;

	public OpenLiveDto writeOpenLive(String group, String header, OpenLiveDto openLiveDto, MultipartFile file) throws Exception;

	public OpenLiveParticipantDto writeOpenLiveParticipate(String artist, String accessToken, int id) throws Exception;

	OpenLiveDto cancelOpenLiveParticipate(Integer userId, int id);

	int getParticipateRank(Integer userId, int openLiveId);
}
