package com.mk.ourola.api.mypage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.mypage.repository.dto.BillDto;

@Repository
public interface BillRepository extends JpaRepository<BillDto, Integer> {

	// 사용자가 구매한 모든 결제 내역
	List<BillDto> findByFanDto_Id(int userId);

	// 사용자가 구매한 모든 온라인 콘서트
	List<BillDto> findByFanDto_IdAndOnlineConcertDto_IdIsNotNull(int userId);

	// 사용자가 구매한 모든 멤버십 내역
	List<BillDto> findByFanDto_IdAndMembershipPayDto_IdIsNotNull(int userId);

	boolean existsByFanDto_IdAndOnlineConcertDto_Id(int userId, int concertId);

}
