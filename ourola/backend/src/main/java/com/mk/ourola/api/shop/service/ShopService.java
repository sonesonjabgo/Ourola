package com.mk.ourola.api.shop.service;

import java.util.List;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;

public interface ShopService {

	// 상품 전체 목록 (온콘, 멤버십)
	public List<OnlineConcertDto> getAllOnlinConcertItems(String artist);
	public List<MembershipPayDto> getAllMembershipItems(String artist);

	// 상품 개별 조회 (온콘, 멤버십)
	public Online

}
