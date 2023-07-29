package com.mk.ourola.api.others.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.others.repository.dto.OpenLiveParticipantDto;

public interface OpenLiveParticipantRepository extends JpaRepository<OpenLiveParticipantDto, Integer> {
	List<OpenLiveParticipantDto> findByFanDto_Id(int id);

	Optional<OpenLiveParticipantDto> findByFanDto_IdAndOpenLiveDto_Id(int fanId, int openLiveId);
}
