package com.mk.ourola.api.user.controller;

import java.util.List;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.service.MyPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MyPageController {
	private final MyPageService myPageService;

	// @GetMapping("/user")
	// public ResponseEntity<List<BillDto>> getAllBill() {
	// 	try {
	// 		return new ResponseEntity<List<BillDto>>(myPageService.)
	// 	}
	// }
}
