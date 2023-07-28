package com.mk.ourola.api.common.file.service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.file.repository.FeedFileRepository;
import com.mk.ourola.api.common.file.repository.ProfileFileRepository;
import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.repository.dto.ProfileFileDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.group.repository.GroupRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
	private final ProfileFileRepository profileFileRepository;
	private final FanRepository fanRepository;
	private final FeedFileRepository feedFileRepository;
	private final ArtistRepository artistRepository;
	private final GroupRepository groupRepository;

	@Value("${spring.servlet.multipart.location}")
	private String FILE_PATH;

	public FanDto writeProfileImage(MultipartFile file, String email) throws
		NoSuchAlgorithmException,
		IOException {
		Optional<FanDto> userDto = fanRepository.findByEmail(email);
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
		FanDto fanDto = userDto.get();
		fanDto.setProfileFileDto(save);
		fanRepository.save(fanDto);

		return fanDto;
	}

	public String writeFeedImages(List<MultipartFile> files, FeedDto feedDto) throws
		NoSuchAlgorithmException,
		IOException {
		System.out.println("=============");
		for (MultipartFile file : files) {
			String fileName = getFileNameWithoutExtension(file.getOriginalFilename());
			String fileExtension = getFileExtension(file.getOriginalFilename());
			String hashName = generateUniqueFileName(fileName);
			String feedfile_path = FILE_PATH + "/feedFile/" + hashName;
			System.out.println(feedfile_path);
			File dest = new File(feedfile_path);
			file.transferTo(dest);

			FeedFileDto feedFileDto = FeedFileDto.builder()
				.feedDto(feedDto)
				.filePath(feedfile_path)
				.fileExtension(fileExtension).build();
			ProfileFileDto save = feedFileRepository.save(feedFileDto);
		}
		return "저장완료";
	}

	public byte[] getProfileImg(String email) throws IOException {
		Optional<FanDto> userDto = fanRepository.findByEmail(email);
		Optional<ProfileFileDto> profileFileDto = profileFileRepository.findById(
			userDto.get().getProfileFileDto().getId());
		String filePath = profileFileDto.get().getFilePath();
		String fileExtension = profileFileDto.get().getFileExtension();
		File file = new File(filePath);
		return FileUtil.readAsByteArray(file);
	}

	@Override
	public byte[] getArtistProfileImg(int id) throws IOException {
		Optional<ArtistDto> artistDto = artistRepository.findById(id);
		File file = new File(artistDto.get().getProfileFileDto().getFilePath());
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
