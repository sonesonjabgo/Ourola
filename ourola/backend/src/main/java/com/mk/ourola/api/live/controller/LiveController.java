package com.mk.ourola.api.live.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.service.ArtistServiceImpl;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.ovenvidu.service.OpenViduServiceImpl;
import com.mk.ourola.api.live.repository.Dto.LiveDto;
import com.mk.ourola.api.live.service.LiveServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{group}/live")
public class LiveController {
	private final LiveServiceImpl liveService;
	private final OpenViduServiceImpl openViduService;
	private final ArtistServiceImpl artistService;
	private final JwtService jwtService;

	@PostMapping("/write")
	public ResponseEntity<LiveDto> writeLive(@RequestHeader("Authorization") String accessToken,
		@RequestBody LiveDto liveDto,
		@PathVariable String group) {
		try {
			Integer userId = jwtService.accessTokenToUserId(accessToken);
			LiveDto saved = liveService.writeLive(liveDto, userId, group);
			return new ResponseEntity<>(saved, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{liveId}")
	public ResponseEntity<?> removeLive(@RequestHeader("Authorization") String accessToken, @PathVariable(name = "liveId") int liveId){
		try{
			liveService.removeLive(liveId);
			return new ResponseEntity<>("삭제 완료", HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/list")
	public ResponseEntity<List<LiveDto>> getAllLive(@PathVariable String group) {
		try {
			return new ResponseEntity<List<LiveDto>>(liveService.getAllLive(group), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/isAdmin")
	public ResponseEntity<Boolean> isGroupAdmin(@RequestHeader("Authorization") String accessToken,
		@PathVariable String group) {
		try {
			String role = jwtService.extractRole(accessToken).orElse(null);
			if (role == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else if (role.equals("CHANNEL_ADMIN") && artistService.isAdmin(accessToken, group)) {    // 해당 그룹 채널관리자이면
				return new ResponseEntity<Boolean>(true, HttpStatus.OK);
			} else {    // 관리자가 아니면  false 리턴
				return new ResponseEntity<Boolean>(false, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions")
	public ResponseEntity<String> initializeSession(@RequestHeader("Authorization") String accessToken,
		@RequestBody(required = false) Map<String, Object> params) {
		try {
			return new ResponseEntity<String>(openViduService.initializeSession(params), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/api/sessions/{sessionId}/connections")
	public ResponseEntity<String> createConnection(@RequestHeader("Authorization") String accessToken,
		@PathVariable("sessionId") String sessionId,
		@RequestBody(required = false) Map<String, Object> params) {
		try {
			String connection = openViduService.createConnection(sessionId, params);
			if (connection == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<String>(connection, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
