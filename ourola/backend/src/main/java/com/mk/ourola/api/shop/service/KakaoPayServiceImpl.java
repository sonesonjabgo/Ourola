package com.mk.ourola.api.shop.service;

import java.net.URI;
import java.net.URISyntaxException;

import javax.transaction.Transactional;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mk.ourola.api.shop.repository.dto.KakaoPayReadyResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@Service
@Log
@RequiredArgsConstructor
@Transactional
public class KakaoPayServiceImpl implements KakaoPayService {

	private static final String DOMAIN = "http://localhost:80";
	private static final String HOST = "https://kapi.kakao.com";
	private static final String cid = "TC0ONETIME";
	private static final String admin_Key = "9e1741de092cf5c1c60ee154f57b9e3a";
	private KakaoPayReadyResponse kakaoReady;

	@Override
	public KakaoPayReadyResponse kakaoPayReady() {
		RestTemplate restTemplate = new RestTemplate();

		// 서버로 요청할 Header
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "KakakAK " + admin_Key);
		headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
		headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

		// TODO : 상품 넣기
		// 서버로 요청할 Body
		MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
		params.add("cid", cid);
		params.add("partner_order_id", "1001");
		params.add("partner_user_id", "gorany");
		params.add("item_name", "갤럭시S9");
		params.add("quantity", "1");
		params.add("total_amount", "2100");
		params.add("tax_free_amount", "100");
		params.add("approval_url", DOMAIN + "/kakaoPaySuccess");
		params.add("cancel_url", DOMAIN + "/kakaoPayCancel");
		params.add("fail_url", DOMAIN + "/kakaoPaySuccessFail");

		// 파라미터, 헤더
		HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, headers);

		// try {
		// 	// 외부에 보낼 url
		// 	kakaoPayReadyResponse = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), requestEntity,
		// 		KakaoPayReadyResponse.class);
		//
		// 	log.info("" + kakaoPayReadyResponse);
		//
		// 	return kakaoPayReadyResponse;
		//
		// } catch (RestClientException e) {
		// 	// TODO Auto-generated catch block
		// 	e.printStackTrace();
		// } catch (URISyntaxException e) {
		// 	// TODO Auto-generated catch block
		// 	e.printStackTrace();
		// }
		//
		// return null;

		kakaoReady = restTemplate.postForObject("https://kapi.kakao.com/v1/payment/ready", requestEntity,
			KakaoPayReadyResponse.class);

		log.info("" + kakaoReady);

		return kakaoReady;
	}
}
