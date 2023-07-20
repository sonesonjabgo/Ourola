package com.mk.ourola.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.repository.dto.FanUserDto;

public interface FanUserRepository extends JpaRepository<FanUserDto, Integer> {
    Optional<FanUserDto> findByEmail(String email);
    Optional<FanUserDto> findByName(String name);

    Optional<FanUserDto> findByRefreshToken(String refreshToken);

}
