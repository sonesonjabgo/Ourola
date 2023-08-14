package com.mk.ourola.api.others.openlive.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.others.announcement.repository.dto.AnnouncementDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;

@Repository
public interface OpenLiveRepository extends JpaRepository<OpenLiveDto, Integer> {
	Page<OpenLiveDto> findByGroupDto_IdAndTicketingEndDateIsAfter(int id, Date currentTime, Pageable pageable);

	OpenLiveDto findById(int id);
}
