package com.mk.ourola.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.repository.dto.FanFeedDto;

@Repository
public interface FanFeedRepository extends JpaRepository<FanFeedDto, Integer> {

	List<FanFeedDto> findAll();

	FanFeedDto findById(int id);

	List<FanFeedDto> findByGroupChannelDto_Id(int id);

}
