package com.mk.ourola.api.shop.service;

import java.lang.reflect.Member;
import java.util.List;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;

public interface ShopService {

	// 상품 전체 목록 (온콘, 멤버십)
	public List<OnlineConcertDto> getAllOnlineConcertItems(String artist);
	// public List<MembershipPayDto> getAllMembershipItems(String artist);

	// 상품 개별 조회 (온콘, 멤버십)
	public OnlineConcertDto getOnlineConcertItem(String artist, int id);
	public MembershipPayDto getMembershipItem(String artist, int id);

	// 상품 등록 (소속사만 가능)
	public OnlineConcertDto writeOnlineConcert(String artist, String accessToken, OnlineConcertDto onlineConcertDto) throws Exception;
	public MembershipPayDto writeMembership(String artist, String accessToken, MembershipPayDto membershipPayDto) throws Exception;

	// 상품 수정 (소속사만 가능)
	public OnlineConcertDto modifyOnlineConcert(String artist, String accessToken, OnlineConcertDto onlineConcertDto) throws Exception;
	public MembershipPayDto modifyMembership(String artist, String accessToken, MembershipPayDto membershipPayDto) throws Exception;

	// 상품 삭제 (소속사만 가능)
	public void deleteOnlineConcert(String artist, String accessToken, int id) throws Exception;
	public void deleteMembership(String artist, String accessToken, int id) throws Exception;



}
