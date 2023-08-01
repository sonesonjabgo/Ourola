package com.mk.ourola.api.common.auth.controller;

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
}
