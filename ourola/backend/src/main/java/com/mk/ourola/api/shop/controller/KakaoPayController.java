package com.mk.ourola.api.shop.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.shop.service.KakaoPayServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
@Log
public class KakaoPayController {
	private final KakaoPayServiceImpl kakaoPayService;

	// 결제 요청
	@PostMapping("/ready")
	public String kakaoPayReady() {
		log.info("===============kakaoPay post===============");
		return "redirect:" + kakaoPayService.kakaoPayReady();
	}

	// 결제 진행 중 취소
	@GetMapping("/success")
	public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
		log.info("kakaoPaySuccess get......................");
		log.info("kakaoPaySuccess pg_token : " + pg_token);

		model.addAttribute("info", kakaoPayService.kakaoPayInfo(pg_token));
		log.info("" + kakaoPayService.kakaoPayInfo(pg_token).getAmount());
	}
}
