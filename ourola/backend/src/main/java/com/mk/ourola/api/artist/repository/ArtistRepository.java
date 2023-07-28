package com.mk.ourola.api.artist.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;

@Repository
public interface ArtistRepository extends JpaRepository<ArtistDto, Integer> {
	List<ArtistDto> findByGroupDto_Id(int id);

	List<ArtistDto> findByGroupDto_IdAndIsAdminIsFalse(int id);

	Optional<ArtistDto> findByEmail(String email);

	Optional<ArtistDto> findByRefreshToken(String refreshToken);
}
