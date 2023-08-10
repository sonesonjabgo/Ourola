package com.mk.ourola.api.others.openlive.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;

public interface OpenLiveParticipantRepository extends JpaRepository<OpenLiveParticipantDto, Integer> {
	List<OpenLiveParticipantDto> findByFanDto_Id(int id);

	Optional<OpenLiveParticipantDto> findByFanDto_IdAndOpenLiveDto_Id(int fanId, int openLiveId);

	Integer deleteByOpenLiveDto_IdAndFanDto_Id(int id, Integer userId);

	@Query(value = "SELECT `rank` from (select *, RANK() OVER (PARTITION BY open_live_id ORDER BY id) as `rank` FROM open_live_participant) as r WHERE open_live_id = :openLiveId AND fan_id = :userId",
		nativeQuery = true)
	int findByOpenLiveDto_IdAndFanDto_IdOverRank(int userId, int openLiveId);

	boolean existsByFanDto_IdAndOpenLiveDto_Id(int fanId, int openLiveId);
}
