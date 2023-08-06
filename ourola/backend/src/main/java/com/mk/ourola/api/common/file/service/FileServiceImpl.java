package com.mk.ourola.api.common.file.service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.file.repository.FeedFileRepository;
import com.mk.ourola.api.common.file.repository.ProfileFileRepository;
import com.mk.ourola.api.common.file.repository.ShopFileRepository;
import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.common.file.repository.dto.ShopFileDto;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.repository.dto.ProfileFileDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {
	private final ProfileFileRepository profileFileRepository;
	private final FanRepository fanRepository;
	private final FeedFileRepository feedFileRepository;
	private final ArtistRepository artistRepository;
	private final GroupRepository groupRepository;
	private final ShopFileRepository shopFileRepository;

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

	@Override
	public String writeFeedImages(List<MultipartFile> files, FeedDto feedDto) throws
		NoSuchAlgorithmException,
		IOException {
		System.out.println("=============");
		System.out.println(files.size());
		for (MultipartFile file : files) {
			System.out.println(file.getOriginalFilename());
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
			FeedFileDto save = feedFileRepository.save(feedFileDto);
		}
		return "저장완료";
	}

	public String removeFeedImage(int feedId) {
		List<FeedFileDto> fileList = feedFileRepository.findByFeedDto_Id(feedId);

		for (FeedFileDto file : fileList) {
			String filePath = file.getFilePath();
			File feedFile = new File(filePath);
			if (feedFile.delete()) {
				System.out.println("파일 삭제 완료");
			} else {
				System.out.println("파일 삭제 실패");
			}
		}
		return "이미지 삭제 성공";
	}

	@Override
	public String ShopMainImageToPath(MultipartFile mainFile) throws
		NoSuchAlgorithmException,
		IOException {
		String fileName = getFileNameWithoutExtension(mainFile.getOriginalFilename());
		String hashName = generateUniqueFileName(fileName);
		String shopfile_path = FILE_PATH + "/shopMainFile/" + hashName;
		System.out.println(shopfile_path);
		File dest = new File(shopfile_path);
		mainFile.transferTo(dest);

		// ShopFileDto shopMainFileDto = ShopFileDto.builder()
		// 	.membershipPayDto(membershipPayDto)
		// 	.onlineConcertDto(onlineConcertDto)
		// 	.filePath(shopfile_path)
		// 	.build();
		// ShopFileDto saveMain = shopFileRepository.save(shopMainFileDto);

		return hashName;
	}

	@Override
	public String writeShopImages(List<MultipartFile> files, OnlineConcertDto onlineConcertDto,
		MembershipPayDto membershipPayDto) throws
		NoSuchAlgorithmException,
		IOException {

		if (files != null) {
			for (MultipartFile file : files) {
				if (file.isEmpty())
					continue;
				System.out.println(file.getOriginalFilename());
				String fileName = getFileNameWithoutExtension(file.getOriginalFilename());
				String fileExtension = getFileExtension(file.getOriginalFilename());
				String hashName = generateUniqueFileName(fileName);
				String shopfile_path = FILE_PATH + "/shopFile/" + hashName;
				System.out.println(shopfile_path);
				File dest = new File(shopfile_path);
				file.transferTo(dest);

				ShopFileDto shopFileDto = ShopFileDto.builder()
					.membershipPayDto(membershipPayDto)
					.onlineConcertDto(onlineConcertDto)
					.filePath(shopfile_path)
					.build();
				ShopFileDto save = shopFileRepository.save(shopFileDto);
			}
		}
		return "저장완료";
	}

	public byte[] getProfileImg(int id) throws IOException {
		Optional<ProfileFileDto> profileFileDto = profileFileRepository.findById(id);
		String filePath = profileFileDto.get().getFilePath();
		String fileExtension = profileFileDto.get().getFileExtension();
		File file = new File(filePath);
		return FileUtil.readAsByteArray(file);
	}

	@Override
	public byte[] getGroupImg(String filePath) throws IOException {
		File file = new File(FILE_PATH + "/groupImg/" + filePath);
		return FileUtil.readAsByteArray(file);
	}

	@Override
	public Map<String, String> writeGroupImage(MultipartFile file) throws
		NoSuchAlgorithmException,
		IOException {
		System.out.println("=============");
		System.out.println(file.getOriginalFilename());
		String fileName = getFileNameWithoutExtension(file.getOriginalFilename());
		String fileExtension = getFileExtension(file.getOriginalFilename());
		String hashName = generateUniqueFileName(fileName);
		String groupFile_path = FILE_PATH + "/groupImg/" + hashName;
		System.out.println(groupFile_path);
		File dest = new File(groupFile_path);
		file.transferTo(dest);
		Map<String, String> result = new HashMap<>();
		result.put("hashName", hashName);
		result.put("fileExtension", fileExtension);
		return result;
	}

	@Override
	public byte[] getFeedImg(int fileId) throws IOException {
		Optional<FeedFileDto> feedImg = feedFileRepository.findById(fileId);
		File file = new File(feedImg.get().getFilePath());
		return FileUtil.readAsByteArray(file);
	}

	@Override
	public byte[] getArtistProfileImg(int id) throws IOException {
		Optional<ArtistDto> artistDto = artistRepository.findById(id);
		File file = new File(artistDto.get().getProfileFileDto().getFilePath());
		return FileUtil.readAsByteArray(file);
	}

	@Override
	public byte[] getOnlineConcertMainImgList(String group) throws Exception {
		GroupDto groupDto = groupRepository.findByName(group);
		List<ShopFileDto> shopFileDto = shopFileRepository.findByOnlineConcertDto_GroupDto_Id(groupDto.getId());
		return null;
	}

	@Override
	public byte[] getShopMainImg(String filePath) throws IOException {
		File file = new File(FILE_PATH + "/shopMainFile/" + filePath);
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
