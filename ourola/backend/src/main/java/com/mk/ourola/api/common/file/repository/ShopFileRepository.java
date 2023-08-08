package com.mk.ourola.api.common.file.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.common.file.repository.dto.ShopFileDto;

public interface ShopFileRepository extends JpaRepository<ShopFileDto, Integer> {

	List<ShopFileDto> findByOnlineConcertDto_GroupDto_Id(int id);

	void deleteByOnlineConcertDto_Id(int id);

	void deleteByMembershipPayDto_Id(int id);
}
