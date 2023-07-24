package com.mk.ourola.api.common.file.Controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class FileController {
	private final FileServiceImpl fileService;
	private final FanUserRepository fanUserRepository;

	@PostMapping("/write")
	public ResponseEntity<?> writeProfileImage(
		@RequestParam MultipartFile file,
		@RequestParam String email,
		@ModelAttribute(name = "user") FanUserDto fanUserDto) {

		System.out.println(fanUserDto);
		// 대충 유저id를 기준으로 레포지토리에서 유저 DTO를 조회하는 서비스 메서드 호출하는 코드가 여기 있다고 침
		// 여기선 DTO를 만들어서 테스트 함

		try {
			ProfileFileDto savedProfileDto = fileService.writeProfileImage(file, fanUserDto.getId());
			fanUserDto.setProfileFileDto(savedProfileDto);
			return new ResponseEntity<>(fanUserDto, HttpStatus.OK);
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

	}

	@GetMapping("/getImg")
	public ResponseEntity<?> getProfileImg(@RequestParam int userId) {
		try {
			byte[] profileImg = fileService.getProfileImg(userId);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(profileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
