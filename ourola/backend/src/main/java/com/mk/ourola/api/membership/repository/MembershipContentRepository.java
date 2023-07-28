package com.mk.ourola.api.membership.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.membership.repository.dto.MembershipContentDto;

@Repository
public interface MembershipContentRepository extends JpaRepository<MembershipContentDto, Integer> {
	Optional<MembershipContentDto> findById(int id);

	List<MembershipContentDto> findByGroupDto_Id(int groupId);
}
