package com.mk.ourola.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.repository.dto.BillDto;

@Repository
public interface BillRepository extends JpaRepository<BillDto, Integer> {

	List<BillDto> findByUserId(int userId);

	List<BillDto> findByMembershipPayDto_Id(int membershipId);

	List<BillDto> findByOnlineConcertDto_Id(int concertId);
}
