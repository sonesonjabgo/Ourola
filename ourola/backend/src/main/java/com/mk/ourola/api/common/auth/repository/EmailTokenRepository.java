package com.mk.ourola.api.common.auth.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailTokenRepository extends JpaRepository<EmailTokenDto, String> {
	Optional<EmailTokenDto> findByIdAndExpirationDateAfterAndExpired(String emailTokenId, LocalDateTime now, Boolean expired);
	Optional<EmailTokenDto> findByFanIdAndExpirationDateAfterAndExpired(int fanId, LocalDateTime now, Boolean expired);
}
