package com.mk.ourola.api.common.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {
	@GetMapping("")
	public ResponseEntity<?> getRefreshToken() {
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
