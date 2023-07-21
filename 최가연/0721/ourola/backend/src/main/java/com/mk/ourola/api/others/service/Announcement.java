package com.mk.ourola.api.others.service;

import java.util.List;

import com.mk.ourola.api.others.repository.dto.AnnouncementDto;

public interface Announcement {
	// 게시판 첫 접속 시 전체 공지 정보를 보내는 메서드
	public List<AnnouncementDto> getAllAnnouncement(String artist) throws Exception;

	// 선택된 하나의 공지의 정보를 보내는 메서드
	public AnnouncementDto getAnnouncement(String artist, int announcementId) throws Exception;

	// 소속사 직원이 공지를 만드는 메서드
	public AnnouncementDto writeAnnouncement(String artist, String accessToken, AnnouncementDto announcementDto) throws
		Exception;

	// 소속사 직원이 공지 제목 혹은 내용을 바꾸는 메서드
	public AnnouncementDto modifyAnnouncement(String artist, int announcementId, String accessToken,
		AnnouncementDto announcementDto) throws
		Exception;

	// 소속사 직원이 공지를 지우는 메서드
	public void removeAnnouncement(String artist, int announcementId, String accessToken) throws Exception;
}
