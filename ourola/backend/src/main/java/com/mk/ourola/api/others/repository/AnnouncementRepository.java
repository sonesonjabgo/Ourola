package com.mk.ourola.api.others.repository;

import java.util.List;

import com.mk.ourola.api.others.repository.dto.AnnouncementDto;

public interface AnnouncementRepository {
	List<AnnouncementDto> findByGroupChannelDto_Id(int id);

	void save(AnnouncementDto announcementDto);

}
