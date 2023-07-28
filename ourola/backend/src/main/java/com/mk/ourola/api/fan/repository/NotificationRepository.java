package com.mk.ourola.api.fan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.fan.repository.dto.NotificationDto;

public interface NotificationRepository extends JpaRepository<NotificationDto, Integer> {
	List<NotificationDto> findByFanDto_Id(int id);
}
