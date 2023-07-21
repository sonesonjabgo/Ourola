package com.mk.ourola.api.user.controller;

import java.util.List;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.service.MyPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MyPageController {
	private final MyPageService myPageService;

	// TODO : component가 바뀌도록 할건데 일단 페이지 바뀌는걸로 함
	// FIXME : 추후 component가 바뀌도록 하자

	// 개인정보 확인
	// FIXME : 유저 DTO 수정되는 대로 다시 건드리기
	// @GetMapping("/userinfo")
	// public ResponseEntity<FanUserDto> getUserInfo() {
	// 	try {
	// 		//myPageService.
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

	// 북마크 내역 불러오기
	@GetMapping("/bookmark")
	public ResponseEntity<List<BookMarkDto>> getAllBookMark() {
		try {
			return new ResponseEntity<List<BookMarkDto>>(myPageService.getAllBookMark("김싸피"), HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 모든 구매 내역 불러옴
	@GetMapping("/contents")
	public ResponseEntity<List<BillDto>> getAllBill() {
		try {
			return new ResponseEntity<List<BillDto>>(myPageService.getAllBill("김싸피"), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
