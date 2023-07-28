package com.mk.ourola.api.mypage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

@Repository
public interface UserMembershipInfoRepository extends JpaRepository<UserMembershipInfoDto, Integer> {

	// 멤버십 가격정보 가져오기
	List<UserMembershipInfoDto> findByFanDto_Id(int userId);
}
