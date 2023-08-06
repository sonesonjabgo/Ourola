package com.mk.ourola.api.admin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@Slf4j
public class AdminController {
	private final AdminServiceImpl adminService;

	// 모든 사용자 리스트 조회
	@GetMapping("")
	public ResponseEntity<?> getAllUserList() {
		try {
			log.info("getAllUserList Controller");
			return new ResponseEntity<>(adminService.getAllUserList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 모든 아티스트 사용자 조회
	@GetMapping("/artist/list")
	public ResponseEntity<?> getAllArtistList() {
		try {
			return new ResponseEntity<>(adminService.getAllArtistList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 모든 팬 사용자 조회
	@GetMapping("/fan/list")
	public ResponseEntity<?> getAllFanList() {
		try {
			return new ResponseEntity<>(adminService.getAllFanList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 그룹에 포함된 모든 아티스트 사용자 조회
	@GetMapping("/artist/list/{group}")
	public ResponseEntity<?> getAllArtistList(@PathVariable String group) {
		try {
			return new ResponseEntity<>(adminService.getAllArtistList(group), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 그룹을 구독하고 있는 모든 팬 사용자 조회
	@GetMapping("/fan/list/{group}")
	public ResponseEntity<?> getAllFanListInGroup(@PathVariable String group) {
		try {
			return new ResponseEntity<>(adminService.getAllFanListInGroup(group), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 개별 아티스트 사용자 조회
	@GetMapping("/artist/{id}")
	public ResponseEntity<?> getArtist(@PathVariable int id) {
		try {
			return new ResponseEntity<>(adminService.getArtist(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 개별 팬 사용자 조회
	@GetMapping("/fan/{id}")
	public ResponseEntity<?> getFan(@PathVariable int id) {
		try {
			return new ResponseEntity<>(adminService.getFan(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 채널 권한 부여 ARTIST -> CHANNEL_ADMIN
	@GetMapping("/artist/set-channel/{id}")
	public ResponseEntity<?> setChannelAdmin(@PathVariable int id) {
		try {
			return new ResponseEntity<>(adminService.setChannelAdmin(id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자 계정 정지/차단
}
