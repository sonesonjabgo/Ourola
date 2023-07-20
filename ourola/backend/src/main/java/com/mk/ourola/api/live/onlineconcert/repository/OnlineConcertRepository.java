package com.mk.ourola.api.live.onlineconcert.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;

public interface OnlineConcertRepository extends JpaRepository<OnlineConcertDto, Integer> {
	List<OnlineConcertDto> findById(int concertId);

	List<OnlineConcertDto> findByGroupChannelDto_Id(int groupId);
}
