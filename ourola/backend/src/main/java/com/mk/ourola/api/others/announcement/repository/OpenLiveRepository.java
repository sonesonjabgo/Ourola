package com.mk.ourola.api.others.announcement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.others.announcement.repository.dto.OpenLiveDto;

@Repository
public interface OpenLiveRepository extends JpaRepository<OpenLiveDto, Integer> {
	List<OpenLiveDto> findByGroupDto_Id(int id);

	OpenLiveDto findById(int id);
}
