package com.mk.ourola.api.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

@Repository
public interface UserMembershipInfoRepository extends JpaRepository<MembershipPayDto, Integer> {

	List<UserMembershipInfoDto> findByFanUserDto_Id(int userId);
}
