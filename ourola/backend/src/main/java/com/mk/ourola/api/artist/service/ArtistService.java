package com.mk.ourola.api.artist.service;

import com.mk.ourola.api.artist.repository.dto.ArtistSignUpDto;

public interface ArtistService {

	public void signUp(ArtistSignUpDto artistSignUpDto) throws Exception;

	boolean isAdmin(String accessToken, String groupName) throws Exception;
}
