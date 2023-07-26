package com.mk.ourola.api.user.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.user.service.ArtistUserService;
import com.mk.ourola.api.user.service.ArtistUserServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/artist")
@RequiredArgsConstructor
public class ArtistUserController {

	private final ArtistUserServiceImpl artistUserService;

	@GetMapping("/{group}/memberList")
	public ResponseEntity<?> getGroupArtistList(@PathVariable(name = "group") String groupName) {
		try {
			System.out.println("그룹 멤버 목록 조회");
			List<ArtistUserDto> groupArtistList = artistUserService.getGroupArtistList(groupName);
			return new ResponseEntity<>(groupArtistList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
