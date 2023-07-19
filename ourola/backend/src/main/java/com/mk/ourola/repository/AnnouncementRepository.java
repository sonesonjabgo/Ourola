package com.mk.ourola.repository;

import java.util.List;

import com.mk.ourola.repository.dto.AnnouncementDto;

public interface AnnouncementRepository {
	List<AnnouncementDto> findByGroupChannelDto_Id(int id);

	void save(AnnouncementDto announcementDto);

}
