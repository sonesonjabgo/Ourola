package com.mk.ourola.api.common.file.controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class FileController {
	private final FileServiceImpl fileService;
	private final JwtService jwtService;

	@PostMapping("/writeimg/profile")
	public ResponseEntity<?> writeProfileImage(
		@RequestParam MultipartFile file,
		@RequestHeader(name = "Authorization") String accessToken) {

		// 대충 유저id를 기준으로 레포지토리에서 유저 DTO를 조회하는 서비스 메서드 호출하는 코드가 여기 있다고 침
		// 여기선 DTO를 만들어서 테스트 함

		try {
			Optional<String> email = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get());
			FanDto fanDto = fileService.writeProfileImage(file, email.get());
			return new ResponseEntity<>(fanDto, HttpStatus.OK);
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@GetMapping("/getimg/group-img/{filepath}")
	public ResponseEntity<?> getGroupImg(@PathVariable(name = "filepath") String filePath) {
		try {
			byte[] profileImg = fileService.getGroupImg(filePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(profileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@GetMapping("/getimg/profile")
	public ResponseEntity<?> getProfileImg(@RequestParam int id) {
		try {
			System.out.println(id);
			//Optional<String> email = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get());
			byte[] profileImg = fileService.getProfileImg(id);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(profileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getimg/feed-img/{filePath}")
	public ResponseEntity<?> getFeedImg(@PathVariable String filePath) {
		try {
			byte[] profileImg = fileService.getFeedImg(filePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(profileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@GetMapping("/getimg/artist-profile")
	public ResponseEntity<?> getArtistProfileImg(@RequestParam int id) {
		try {
			byte[] artistProfileImg = fileService.getArtistProfileImg(id);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(artistProfileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// @GetMapping("/getimg/shop-main/list")
	// public ResponseEntity<?> getShopMainImgList(@RequestParam String group) throws Exception {
	// 	try {
	// 		byte[] artistProfileImg = fileService.getOnlineConcertMainImgList(group);
	// 		HttpHeaders headers = new HttpHeaders();
	// 		headers.setContentType(MediaType.IMAGE_JPEG);
	// 		return new ResponseEntity<>(artistProfileImg, headers, HttpStatus.OK);
	// 	} catch (IOException e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

	// 상품의 메인이미지(썸네일)을 불러온다.
	// filePath : 온콘/멤버십 dto 안에 filePath
	@GetMapping("/getimg/shop-main/{filePath}")
	public ResponseEntity<?> getShopMainImg(
		@PathVariable(name = "filePath") String filePath) throws Exception {
		try {
			byte[] shopProfileImg = fileService.getShopMainImg(filePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(shopProfileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품의 상세이미지(설명)을 불러온다.
	// filePath : 온콘/멤버십 dto 안의 fileList 안의 filePath
	@GetMapping("/getimg/shop-detail/{filePath}")
	public ResponseEntity<?> getShopDetailImg(@PathVariable(name = "filePath") String filePath) throws Exception {
		try {
			byte[] artistProfileImg = fileService.getShopDetailImg(filePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(artistProfileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 이미지를 불러온다.
	@GetMapping("/getimg/open-live/{filePath}")
	public ResponseEntity<?> getOpenLiveImg(
		@PathVariable(name = "filePath") String filePath) throws Exception {
		try {
			byte[] artistProfileImg = fileService.getOpenLiveImg(filePath);
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.IMAGE_JPEG);
			return new ResponseEntity<>(artistProfileImg, headers, HttpStatus.OK);
		} catch (IOException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
