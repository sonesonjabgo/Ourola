package com.mk.ourola.api.shop.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mk.ourola.api.shop.repository.dto.KakaoPayApprovalVO;
import com.mk.ourola.api.shop.repository.dto.KakaoPayReadyVO;

import lombok.extern.java.Log;

@Service
@Log
public class KakaoPayServiceImpl implements KakaoPayService {

	private static final String cid = "TC0ONETIME";        // 가맹점 테스트 코드
	private static final String ADMIN = "9e1741de092cf5c1c60ee154f57b9e3a";
	private static final String domain = "http://localhost:80";
	private KakaoPayReadyVO kakaoPayReadyVO;
	private KakaoPayApprovalVO kakaoPayApprovalVO;

	@Override
	public String kakaoPayReady() {

		// 카카오 요구 헤더값
		HttpHeaders httpHeaders = new HttpHeaders();
		String auth = "KakaoAK " + ADMIN;
		httpHeaders.set("Authorization", auth);
		httpHeaders.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		// 서버로 요청할 Body
		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		params.add("cid", cid);
		params.add("partner_order_id", "1001");    // 가맹점 주문번호
		params.add("partener_user_id", "mallangkongddeok");    // 가맹점 회원 ID
		params.add("item_name", "세븐틴 멤버십");    // 상품명
		params.add("quantity", "1");    // 총 수량
		params.add("total_amount", "35000");    // 총 금액
		params.add("tax_free_amount", "0");        // 상품 비과세 금액
		params.add("approval_url", domain + "/payment/success");    // 성공 시 redirect url
		params.add("cancel_url", domain + "/payment/cancel");        // 취소 시 redirect url
		params.add("fail_url", domain + "/payment/fail");            // 실패 시 redirect url

		// 파라미터, 헤더
		HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, httpHeaders);

		RestTemplate restTemplate = new RestTemplate();

		try {
			kakaoPayReadyVO = restTemplate.postForObject("https://kapi.kakao.com/v1/payment/ready", requestEntity,
				KakaoPayReadyVO.class);
			log.info("" + kakaoPayReady());
			return kakaoPayReadyVO.getNext_redirect_pc_url();
		} catch (RestClientException e) {
			e.printStackTrace();
		}

		return "/pay";
	}

	@Override
	public KakaoPayApprovalVO kakaoPayInfo(String pg_token) {
		log.info("==========================KakaoPayInfoVO==========================");
		log.info("------------------------------------------------------------------");

		RestTemplate restTemplate = new RestTemplate();

		// 서버로 요청할 Header
		HttpHeaders httpHeaders = new HttpHeaders();
		String auth = "KakaoAK " + ADMIN;
		httpHeaders.set("Authorization", auth);
		httpHeaders.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

		MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
		params.add("cid", cid);
		params.add("tid", kakaoPayReadyVO.getTid());
		params.add("partner_order_id", "1001");    // 가맹점 주문번호
		params.add("partener_user_id", "mallangkongddeok");    // 가맹점 회원 ID
		params.add("pg_token", pg_token);
		params.add("total_amount", "35000");

		// 파라미터, 헤더
		HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, httpHeaders);

		try {
			kakaoPayApprovalVO = restTemplate.postForObject("https://kapi.kakao.com/v1/payment/approve", requestEntity,
				KakaoPayApprovalVO.class);
			log.info("" + kakaoPayApprovalVO);

			return kakaoPayApprovalVO;
		} catch (RestClientException e) {
			e.printStackTrace();
		}

		return null;
	}
}