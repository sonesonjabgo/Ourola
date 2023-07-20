package com.mk.ourola.api.artist.repository;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;

public interface ArtistUserRepository {
	ArtistUserDto findByName(String name);
}
