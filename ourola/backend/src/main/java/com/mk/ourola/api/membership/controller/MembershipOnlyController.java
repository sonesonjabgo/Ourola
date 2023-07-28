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

import com.mk.ourola.api.membership.repository.dto.MembershipContentDto;
import com.mk.ourola.api.membership.service.MembershipOnlyServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/{group}/membership-only")
@RequiredArgsConstructor
public class MembershipOnlyController {
	private final MembershipOnlyServiceImpl membershipOnlyService;

	/*
	 * 멤버십 전용 컨텐츠 목록 불러오기
	 * */
	@GetMapping("/list")
	public ResponseEntity<List<MembershipContentDto>> getAllMembershipOnlyContent(
		@PathVariable("group") String group) {
		try {
			return new ResponseEntity<List<MembershipContentDto>>(
				membershipOnlyService.getAllMembershipOnlyContent(group),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 업로드
	 * */
	@PostMapping("/upload")
	public ResponseEntity<MembershipContentDto> uploadMembershipOnlyContent(@PathVariable("group") String group,
		@RequestHeader String accessToken, @RequestBody MembershipContentDto membershipContentDto) {
		try {
			return new ResponseEntity<MembershipContentDto>(
				membershipOnlyService.uploadMembershipOnlyContent(group, accessToken, membershipContentDto),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 조회
	 * */
	@GetMapping("/read/{contentId}")
	public ResponseEntity<MembershipContentDto> getMembershipOnlyContent(@PathVariable("group") String group,
		@RequestHeader String accessToken, @PathVariable("contentId") int contentId) {
		try {
			return new ResponseEntity<MembershipContentDto>(
				membershipOnlyService.getMembershipOnlyContent(group, accessToken, contentId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 수정
	 * */
	@PutMapping("/modify/{contentId}")
	public ResponseEntity<MembershipContentDto> modifyMembershipOnlyContent(@PathVariable("group") String group,
		@RequestHeader String accessToken, @PathVariable("contentId") int contentId,
		@RequestBody MembershipContentDto newMembershipContentDto) {
		try {
			return new ResponseEntity<MembershipContentDto>(
				membershipOnlyService.modifyMembershipOnlyContent(group, accessToken, contentId,
					newMembershipContentDto),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 삭제
	 * */
	@DeleteMapping("/remove/{contentId}")
	public ResponseEntity<String> removeMembershipOnlyContent(@PathVariable("group") String group,
		@RequestHeader String accessToken, @PathVariable("contentId") int contentId) {
		try {
			membershipOnlyService.removeMembershipOnlyContent(group, accessToken, contentId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
