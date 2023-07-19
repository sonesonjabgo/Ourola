package com.mk.ourola.repository;

import com.mk.ourola.repository.dto.FanUserDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FanUserRepository extends JpaRepository<FanUserDto, Integer> {
    Optional<FanUserDto> findByEmail(String email);
    Optional<FanUserDto> findByName(String name);

    Optional<FanUserDto> findByRefreshToken(String refreshToken);

}
