package com.mk.ourola.api.common.file.service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.user.repository.dto.FanUserDto;

public interface FileService {
	public FanUserDto writeProfileImage(MultipartFile file, String email) throws
		NoSuchAlgorithmException,
		IOException;

	public byte[] getProfileImg(String email) throws IOException;

	public byte[] getArtistProfileImg(int id) throws IOException;
}
