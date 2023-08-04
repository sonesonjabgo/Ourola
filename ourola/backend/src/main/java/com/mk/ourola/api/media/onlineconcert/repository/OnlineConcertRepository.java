package com.mk.ourola.api.media.onlineconcert.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;

public interface OnlineConcertRepository extends JpaRepository<OnlineConcertDto, Integer> {
	OnlineConcertDto findById(int concertId);

	List<OnlineConcertDto> findByGroupDto_Id(int groupId);

	OnlineConcertDto findBySessionId(String sessionId);

}
