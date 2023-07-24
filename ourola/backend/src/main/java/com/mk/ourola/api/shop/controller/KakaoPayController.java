package com.mk.ourola.api.shop.controller;

import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.shop.service.KakaoPayServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class KakaoPayController {
	private final KakaoPayServiceImpl kakaoPayService;

	// 결제 요청
	@PostMapping("/ready")
	public ResponseEntity readyToKakaoPay() {
		return kakaoPayService.kakaoPayReady();
	}
}
