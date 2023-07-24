package com.mk.ourola.api.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.BillDto;

@Repository
public interface BillRepository extends JpaRepository<BillDto, Integer> {

	// 사용자가 구매한 모든 결제 내역
	List<BillDto> findByFanUserDto_Id(int userId);
	
	// 사용자가 구매한 모든 온라인 콘서트
	List<BillDto> findByOnlineConcertDto_IdIsNotNull();

}
