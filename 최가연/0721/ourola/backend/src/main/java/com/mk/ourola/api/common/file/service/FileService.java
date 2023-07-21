package com.mk.ourola.api.common.file.service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

public interface FileService {
	public ProfileFileDto writeProfileImage(MultipartFile file, Integer userId) throws
		NoSuchAlgorithmException,
		IOException;

	public byte[] getProfileImg(int id) throws IOException;
}
