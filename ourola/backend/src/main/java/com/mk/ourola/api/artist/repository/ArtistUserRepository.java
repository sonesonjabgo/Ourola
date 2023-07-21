package com.mk.ourola.api.artist.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;

@Repository
public interface ArtistUserRepository extends JpaRepository<ArtistUserDto, Integer> {
	ArtistUserDto findByName(String name);

	Optional<ArtistUserDto> findByEmail(String email);
}
