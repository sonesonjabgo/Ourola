package com.mk.ourola.api.live.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.live.repository.Dto.LiveDto;

@Repository
public interface LiveRepository extends JpaRepository<LiveDto, Integer> {

	List<LiveDto> findByGroupDto_Id(int groupId);

	LiveDto findBySessionId(String sessionId);
}
