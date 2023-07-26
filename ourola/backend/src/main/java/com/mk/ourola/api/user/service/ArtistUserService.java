package com.mk.ourola.api.user.service;

import java.util.List;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.ArtistUserSignUpDto;

public interface ArtistUserService {

	List<ArtistUserDto> getGroupArtistList(String groupName);

	public void signUp(ArtistUserSignUpDto artistUserSignUpDto) throws Exception;
}
