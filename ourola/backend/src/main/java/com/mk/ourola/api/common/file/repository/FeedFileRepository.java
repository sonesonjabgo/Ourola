package com.mk.ourola.api.common.file.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.fan.repository.dto.ProfileFileDto;

@Repository
public interface FeedFileRepository extends JpaRepository<FeedFileDto, Integer> {
	public FeedFileDto save(FeedFileDto feedFileDto);

	List<FeedFileDto> findByFeedDto_Id(int feedId);
}
