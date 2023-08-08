package com.mk.ourola.api.mypage.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

@Repository
public interface MembershipPayRepository extends JpaRepository<MembershipPayDto, Integer> {

	//사용자가 구매한 모든 멤버십 불러오기
	Optional<MembershipPayDto> findById(int id);

	Optional<MembershipPayDto> findByGroupDto_Id(int groupId);

}
