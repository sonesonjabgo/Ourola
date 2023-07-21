package com.mk.ourola.api.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.SubscribeGroupDto;

@Repository
public interface SubscribeGroupRepository extends JpaRepository<SubscribeGroupDto, Integer> {

	Optional<List<SubscribeGroupDto>> findByFanUserDto_Id(int id);

	List<SubscribeGroupDto> findByGroupChannelDto_Id(int id);
}
