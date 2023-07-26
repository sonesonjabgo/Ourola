package com.mk.ourola.api.user.service;

import java.util.List;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;

public interface ArtistUserService {

	List<ArtistUserDto> getGroupArtistList(String groupName);
}
