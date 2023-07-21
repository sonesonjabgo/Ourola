package com.mk.ourola.api.common.file.service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.file.repository.ProfileFileRepository;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
	private final ProfileFileRepository profileFileRepository;
	private final FanUserRepository fanUserRepository;

	@Value("${spring.servlet.multipart.location}")
	private String FILE_PATH;

	public ProfileFileDto writeProfileImage(MultipartFile file, Integer userId) throws
		NoSuchAlgorithmException,
		IOException {
		System.out.println("=============");
		String fileName = getFileNameWithoutExtension(file.getOriginalFilename());
		String fileExtension = getFileExtension(file.getOriginalFilename());
		String hashName = generateUniqueFileName(fileName);
		String profile_path = FILE_PATH + "/profileImg/" + hashName;
		System.out.println(profile_path);
		File dest = new File(profile_path);
		file.transferTo(dest);

		ProfileFileDto profileFileDto = ProfileFileDto.builder()
			.filePath(profile_path)
			.fileExtension(fileExtension).build();
		ProfileFileDto save = profileFileRepository.save(profileFileDto);

		return save;
	}

	public byte[] getProfileImg(int id) throws IOException {
		Optional<ProfileFileDto> profileFileDto = profileFileRepository.findById(3);
		String filePath = profileFileDto.get().getFilePath();
		String fileExtension = profileFileDto.get().getFileExtension();
		File file = new File(filePath);
		return FileUtil.readAsByteArray(file);
	}

	// 파일 이름을 해시 함수를 사용하여 고유한 값으로 변환
	private String generateUniqueFileName(String fileName) throws NoSuchAlgorithmException {
		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		byte[] hash = digest.digest(fileName.getBytes(StandardCharsets.UTF_8));

		StringBuilder hexString = new StringBuilder();
		for (byte b : hash) {
			String hex = Integer.toHexString(0xff & b);
			if (hex.length() == 1) {
				hexString.append('0');
			}
			hexString.append(hex);
		}

		return hexString.toString();
	}

	// 파일 이름과 확장자를 분리하여 파일 이름 반환
	private String getFileNameWithoutExtension(String filename) {
		int lastDotIndex = filename.lastIndexOf(".");
		if (lastDotIndex != -1) {
			return filename.substring(0, lastDotIndex);
		}
		return filename;
	}

	// 파일의 확장자 반환
	private String getFileExtension(String filename) {
		int lastDotIndex = filename.lastIndexOf(".");
		if (lastDotIndex != -1 && lastDotIndex < filename.length() - 1) {
			return filename.substring(lastDotIndex + 1);
		}
		return "";
	}
}
