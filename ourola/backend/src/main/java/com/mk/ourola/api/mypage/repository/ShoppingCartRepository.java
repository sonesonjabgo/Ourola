package com.mk.ourola.api.mypage.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.mypage.repository.dto.ShoppingCartDto;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCartDto, Integer> {
	ShoppingCartDto findById(int id);

	List<ShoppingCartDto> findByFanDto_Id(int id);

	boolean existsByFanDto_IdAndOnlineConcertDto_Id(int fanId, int onlineConcertId);
	boolean existsByFanDto_IdAndMembershipPayDto_Id(int fanId, int membershipId);
}
