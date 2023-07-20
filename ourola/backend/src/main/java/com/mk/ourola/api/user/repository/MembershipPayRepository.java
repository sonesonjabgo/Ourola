package com.mk.ourola.api.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.MembershipPayDto;

@Repository
public interface MembershipPayRepository extends JpaRepository<MembershipPayDto, Integer> {

	Optional<MembershipPayDto> findById(int id);
	Optional<MembershipPayDto> findByGroupChannelDto_Id(int groupId);
}
