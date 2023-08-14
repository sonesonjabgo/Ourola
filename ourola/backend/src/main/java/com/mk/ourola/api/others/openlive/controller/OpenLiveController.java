package com.mk.ourola.api.others.openlive.controller;

import java.util.Date;
import java.util.List;

import javax.naming.LimitExceededException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.others.announcement.repository.dto.AnnouncementDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;
import com.mk.ourola.api.others.openlive.service.OpenLiveService;
import com.mk.ourola.api.others.openlive.redis.RedisUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("{group}/open-live")
@RequiredArgsConstructor
@Slf4j
public class OpenLiveController {

	private final OpenLiveService openLiveService;
	private final RedisUtil redisUtil;
	private final JwtService jwtService;

	// 그룹 채널별 공개방송 리스트 조회
	@GetMapping("/list")
	public ResponseEntity<?> getOpenLiveList(@PathVariable String group, @PageableDefault(size=3) @SortDefault.SortDefaults({
		@SortDefault(sort = "ticketingDate", direction = Sort.Direction.ASC),
		@SortDefault(sort = "ticketingEndDate", direction = Sort.Direction.ASC)
	}) Pageable pageable) {
		try {
			Date currentTime = new Date();
			Page<OpenLiveDto> openLives = openLiveService.getOpenLiveList(group, currentTime, pageable);
			return new ResponseEntity<>(openLives, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 id로 개별 조회
	@GetMapping("/{id}")
	public ResponseEntity<?> getOpenLive(@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			return new ResponseEntity<>(openLiveService.getOpenLive(group, id), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자가 해당 공개방송을 신청했는지 조회
	@GetMapping("/participate/{id}")
	public ResponseEntity<?> getOpenLiveParticipate(@PathVariable("id") int id, @RequestHeader("Authorization") String header) {
		try {
			return new ResponseEntity<>(openLiveService.getOpenLiveParticipate(header, id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 등록
	@PostMapping("")
	public ResponseEntity<?> writeOpenLive(@PathVariable String group, @RequestHeader("Authorization") String header,
		OpenLiveDto openLiveDto,
		@RequestParam(name = "file", required = false) MultipartFile file) {
		try {
			return new ResponseEntity<>(openLiveService.writeOpenLive(group, header, openLiveDto, file), HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송에 신청
	@PutMapping("/participate/{id}")
	public ResponseEntity<?> writeOpenLiveParticipate(@PathVariable("group") String group,
		@RequestHeader("Authorization") String header, @PathVariable("id") int id) {
		log.info("participate controller");
		try {
			OpenLiveParticipantDto openLiveParticipantDto = redisUtil.saveLock(group, header, id);
			OpenLiveDto openLiveDto = openLiveService.getOpenLive(group, id);
			if (openLiveParticipantDto == null) {
				throw new Exception("신청에 실패하였습니다.");
			}
			return new ResponseEntity<>(openLiveDto, HttpStatus.OK);
		} catch (LimitExceededException lee) {
			return new ResponseEntity<>(false, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 공개방송 신청 취소
	@DeleteMapping("/participate/{id}/cancel")
	public ResponseEntity<?> cancelOpenLiveParticipate(@PathVariable("group") String group,
		@RequestHeader("Authorization") String header, @PathVariable("id") int id) {
		log.info("participate controller");
		try {
			Integer userId = jwtService.accessTokenToUserId(header);
			OpenLiveDto openLiveDto = openLiveService.cancelOpenLiveParticipate(userId, id);
			return new ResponseEntity<>(openLiveDto, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/{id}/rank")
	public ResponseEntity<?> getParticipateRank(@RequestHeader("Authorization") String header,
		@PathVariable(name = "id") int openLiveId) {
		try {
			Integer userId = jwtService.accessTokenToUserId(header);
			int rank = openLiveService.getParticipateRank(userId, openLiveId);
			return new ResponseEntity<>(rank, HttpStatus.OK);
		} catch (Exception e) {
			log.error(e.toString());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
