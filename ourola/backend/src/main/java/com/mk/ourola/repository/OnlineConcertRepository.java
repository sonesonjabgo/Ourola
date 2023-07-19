package com.mk.ourola.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.repository.dto.OnlineConcertDto;

public interface OnlineConcertRepository extends JpaRepository<OnlineConcertDto, Integer> {
	List<OnlineConcertDto> findAll();

	List<OnlineConcertDto> findByGroupChannelDto_Id(int groupId);
}
