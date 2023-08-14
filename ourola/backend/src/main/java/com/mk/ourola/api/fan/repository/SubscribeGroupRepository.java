package com.mk.ourola.api.fan.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.fan.repository.dto.SubscribeGroupDto;

@Repository
public interface SubscribeGroupRepository extends JpaRepository<SubscribeGroupDto, Integer> {

	Optional<List<SubscribeGroupDto>> findByFanDto_Id(int id);

	List<SubscribeGroupDto> findByGroupDto_Id(int id);

	boolean existsByGroupDto_IdAndNickname(int id, String nickname);

	boolean existsByFanDto_IdAndGroupDto_Id(int fanId, int groupId);

	Integer deleteByFanDto_IdAndGroupDto_Id(int fanId, int groupId);

	SubscribeGroupDto findByFanDto_IdAndGroupDto_Id(int fanId, int groupId);

}
