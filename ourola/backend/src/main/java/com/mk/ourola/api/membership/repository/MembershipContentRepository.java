package com.mk.ourola.api.membership.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.membership.repository.dto.MembershipContentsDto;

@Repository
public interface MembershipContentRepository extends JpaRepository<MembershipContentsDto, Integer> {
	//List<MembershipContentsDto> findByGroupChannelDto_Id(int groupId);
}
