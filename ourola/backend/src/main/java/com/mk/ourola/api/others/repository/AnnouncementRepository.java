package com.mk.ourola.api.others.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.others.repository.dto.AnnouncementDto;

@Repository
public interface AnnouncementRepository extends JpaRepository<AnnouncementDto, Integer> {
	List<AnnouncementDto> findByGroupChannelDto_Id(int id);

	AnnouncementDto findById(int id);
}
