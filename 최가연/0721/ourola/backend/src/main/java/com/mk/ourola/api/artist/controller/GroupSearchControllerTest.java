package com.mk.ourola.api.artist.controller;

import java.util.List;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.artist.service.GroupSearchServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
public class GroupSearchControllerTest {

	private final GroupSearchServiceImpl groupSearchService;

	@GetMapping("/{groupName}")
	public ResponseEntity<List<GroupChannelDto>> searchGroup(@PathVariable("groupName") String groupName) {
		try {
			return new ResponseEntity<List<GroupChannelDto>>(groupSearchService.searchGroup(groupName), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
