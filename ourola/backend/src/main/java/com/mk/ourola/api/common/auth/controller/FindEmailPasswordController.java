package com.mk.ourola.api.common.auth.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.common.auth.repository.FindEmailDto;
import com.mk.ourola.api.common.auth.service.FindEmailPasswordServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/find")
public class FindEmailPasswordController {
	private final FindEmailPasswordServiceImpl findEmailPasswordService;

	@PostMapping("/email")
	public ResponseEntity<?> findEmail(@RequestBody FindEmailDto findEmailDto) {
		try {
			System.out.println("find-controller: "+findEmailDto.toString());
			return new ResponseEntity<>(findEmailPasswordService.findEmail(findEmailDto), HttpStatus.OK);
		} catch (Exception e) {
			// System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/password")
	public ResponseEntity<?> findPassword(@RequestBody Map<String, String> map) {
		try {
			System.out.println("find-controller: "+map.get("email"));
			findEmailPasswordService.findPassword(map.get("email"));
			return new ResponseEntity<>("토큰 발송 성공", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 입력받은 토큰이 유효한지
	// true: 유효함, false: 유효하지 않음
	@PostMapping("/verify-token")
	public ResponseEntity<?> verifyToken(@RequestBody Map<String, String> map) {
		try {
			System.out.println("find-controller: "+map.get("token"));

			return new ResponseEntity<>(findEmailPasswordService.verifyToken(map.get("token")), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 토큰 인증 성공 시 비밀번호 변경
	@PostMapping("/modify-password")
	public ResponseEntity<?> modifyPassword(@RequestBody Map<String, String> map) {
		try {
			findEmailPasswordService.modifyPassword(map.get("token"), map.get("newPassword"));
			return new ResponseEntity<>("비밀번호 변경 성공", HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
