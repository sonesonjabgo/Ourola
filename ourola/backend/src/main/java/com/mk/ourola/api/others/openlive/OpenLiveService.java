package com.mk.ourola.api.others.openlive;

import java.util.List;

public interface OpenLiveService {
	public List<OpenLiveDto> getOpenLiveList(String artist);

	public OpenLiveDto getOpenLive(String artist, int id);

	public OpenLiveDto writeOpenLive(String artist, String header, OpenLiveDto openLiveDto) throws Exception;

	public OpenLiveParticipantDto writeOpenLiveParticipate(String artist, String accessToken, int id) throws Exception;

	Integer cancelOpenLiveParticipate(Integer userId, int id);

	int getParticipateRank(Integer userId, int openLiveId);
}
