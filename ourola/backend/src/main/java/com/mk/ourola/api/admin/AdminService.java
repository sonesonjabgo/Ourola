package com.mk.ourola.api.admin;

import java.util.List;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;

public interface AdminService {
	public List<?> getAllUserList() throws Exception;

	public List<ArtistDto> getAllArtistList() throws Exception;
	public List<FanDto> getAllFanList() throws Exception;

	public List<ArtistDto> getAllArtistList(String group) throws Exception;

	public List<FanDto> getAllFanListInGroup(String group) throws Exception;

	public FanDto getFan(int id) throws Exception;

	public ArtistDto getArtist(int id) throws Exception;

	public ArtistDto setChannelAdmin(int id) throws Exception;
}
