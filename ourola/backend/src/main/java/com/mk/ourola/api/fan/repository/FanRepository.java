package com.mk.ourola.api.fan.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.fan.repository.dto.FanDto;

public interface FanRepository extends JpaRepository<FanDto, Integer> {
	Optional<FanDto> findByEmail(String email);

	Optional<FanDto> findByName(String name);

	boolean existsByEmail(String email);

	Optional<FanDto> findByRefreshToken(String refreshToken);

}
