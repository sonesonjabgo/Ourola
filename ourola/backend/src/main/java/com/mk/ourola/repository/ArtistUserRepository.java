package com.mk.ourola.repository;

import com.mk.ourola.repository.dto.ArtistUserDto;

public interface ArtistUserRepository {
	ArtistUserDto findByName(String name);
}
