package com.mk.ourola.api.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.user.repository.dto.NotificationDto;

public interface NotificationRepository extends JpaRepository<NotificationDto, Integer> {
	List<NotificationDto> findByFanUserDto_Id(int id);
}
