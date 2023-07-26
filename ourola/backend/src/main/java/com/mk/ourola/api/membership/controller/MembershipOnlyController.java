package com.mk.ourola.api.membership.controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.membership.repository.dto.MembershipContentsDto;
import com.mk.ourola.api.membership.service.MembershipOnlyServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/{artist}/membership-only")
@RequiredArgsConstructor
public class MembershipOnlyController {
	private final MembershipOnlyServiceImpl membershipOnlyService;

	/*
	 * 멤버십 전용 컨텐츠 목록 불러오기
	 * */
	@GetMapping("/list")
	public ResponseEntity<List<MembershipContentsDto>> getAllMembershipOnlyContent(
		@PathVariable("artist") String artist) {
		try {
			return new ResponseEntity<List<MembershipContentsDto>>(
				membershipOnlyService.getAllMembershipOnlyContent(artist),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 업로드
	 * */
	@PostMapping("/upload")
	public ResponseEntity<MembershipContentsDto> uploadMembershipOnlyContent(@PathVariable("artist") String artist,
		@RequestHeader String accessToken, @RequestBody MembershipContentsDto membershipContentsDto) {
		try {
			return new ResponseEntity<MembershipContentsDto>(
				membershipOnlyService.uploadMembershipOnlyContent(artist, accessToken, membershipContentsDto),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 조회
	 * */
	@GetMapping("/read/{contentId}")
	public ResponseEntity<MembershipContentsDto> getMembershipOnlyContent(@PathVariable("artist") String artist,
		@RequestHeader String accessToken, @PathVariable("contentId") int contentId) {
		try {
			return new ResponseEntity<MembershipContentsDto>(
				membershipOnlyService.getMembershipOnlyContent(artist, accessToken, contentId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	* 멤버십 전용 컨텐츠 수정
	* */
	@PutMapping("/modify/{contentId}")
	public ResponseEntity<MembershipContentsDto> modifyMembershipOnlyContent(@PathVariable("artist") String artist,
		@RequestHeader String accessToken, @PathVariable("contentId") int contentId, @RequestBody MembershipContentsDto newMembershipContentsDto) {
		try {
			return new ResponseEntity<MembershipContentsDto>(
				membershipOnlyService.modifyMembershipOnlyContent(artist, accessToken, contentId, newMembershipContentsDto),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	* 멤버십 전용 컨텐츠 삭제
	* */
	@DeleteMapping("/remove/{contentId}")
	public ResponseEntity<String> removeMembershipOnlyContent(@PathVariable("artist") String artist, @RequestHeader String accessToken, @PathVariable("contentId") int contentId) {
		try {
			membershipOnlyService.removeMembershipOnlyContent(artist, accessToken, contentId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
