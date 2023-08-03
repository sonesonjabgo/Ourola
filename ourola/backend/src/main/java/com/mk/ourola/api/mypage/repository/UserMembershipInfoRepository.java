package com.mk.ourola.api.mypage.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

@Repository
public interface UserMembershipInfoRepository extends JpaRepository<UserMembershipInfoDto, Integer> {

	// 멤버십 가격정보 가져오기
	List<UserMembershipInfoDto> findByFanDto_Id(int userId);

	// 사용자가 어떤 그룹의 멤버십에 가입이 되어있는지 확인
	Optional<UserMembershipInfoDto> findByFanDto_IdAndGroupName(int userId, String groupName);
}
