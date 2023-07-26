package com.mk.ourola.api.artist.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;

@Repository
public interface ArtistUserRepository extends JpaRepository<ArtistUserDto, Integer> {
	ArtistUserDto findByName(String name);

	List<ArtistUserDto> findByGroupChannelDto_Id(int id);

	Optional<ArtistUserDto> findByEmail(String email);

	Optional<ArtistUserDto> findByRefreshToken(String refreshToken);
}
