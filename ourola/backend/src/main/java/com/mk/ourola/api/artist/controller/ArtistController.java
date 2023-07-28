package com.mk.ourola.api.artist.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.ArtistSignUpDto;
import com.mk.ourola.api.artist.service.ArtistServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/artist")
@RequiredArgsConstructor
public class ArtistController {

	private final ArtistServiceImpl artistService;

	@PostMapping("/sign-up")
	public ResponseEntity<?> artistSignUp(@RequestBody ArtistSignUpDto artistSignUpDto) throws Exception {
		artistService.signUp(artistSignUpDto);
		return new ResponseEntity<String>("회원가입 성공", HttpStatus.OK);
	}
}
