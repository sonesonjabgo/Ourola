package com.mk.ourola.api.membership.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.membership.repository.dto.MembershipContentsDto;

@Repository
public interface MembershipContentsRepository extends JpaRepository<MembershipContentsDto, Integer> {
	Optional<MembershipContentsDto> findById(int id);

	List<MembershipContentsDto> findByGroupChannelDto_Id(int groupId);
}
