package com.mk.ourola.api.shop.service;

import com.mk.ourola.api.shop.repository.dto.KakaoPayApprovalVO;
import com.mk.ourola.api.shop.repository.dto.KakaoPayReadyVO;

public interface KakaoPayService {
	String kakaoPayReady();
	KakaoPayApprovalVO kakaoPayInfo(String pg_token);
}
