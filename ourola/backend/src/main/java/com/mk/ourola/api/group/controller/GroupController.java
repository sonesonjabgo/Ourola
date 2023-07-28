package com.mk.ourola.api.group.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.group.service.GroupServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
public class GroupController {

	private final GroupServiceImpl groupService;

	@GetMapping("/{group}")
	public ResponseEntity<List<GroupDto>> searchGroup(@PathVariable("group") String groupName) {
		try {
			return new ResponseEntity<List<GroupDto>>(groupService.searchGroup(groupName), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/{group}/memberlist")
	public ResponseEntity<?> getGroupArtistList(@PathVariable(name = "group") String groupName) {
		try {
			System.out.println("그룹 멤버 목록 조회");
			List<ArtistDto> groupArtistList = groupService.getGroupArtistList(groupName);
			return new ResponseEntity<>(groupArtistList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
