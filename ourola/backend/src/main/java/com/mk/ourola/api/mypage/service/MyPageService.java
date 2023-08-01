package com.mk.ourola.api.mypage.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

public interface MyPageService {

	public ArtistDto getArtistUserInfo(String accessToken) throws Exception;

	// 아티스트 닉네임 수정
	public ArtistDto modifyArtistNickname(String accessToken, ArtistDto newNickname) throws Exception;

	// 아티스트 비밀번호 수정
	public void modifyArtistPassword(String accessToken, ArtistDto newPassword) throws Exception;

	// 팬 개인정보
	// 팬 개인정보 가져오기
	public FanDto getFanUserInfo(String accessToken) throws Exception;

	// 팬 닉네임 수정
	public FanDto modifyFanNickname(String accessToken, FanDto newNickname) throws Exception;

	// 팬 비밀번호 수정
	public void modifyFanPassword(String accessToken, FanDto newPassword) throws Exception;

	// 사용자가 구매한 모든 구매내역 가져오기
	public List<BillDto> getAllBill(String accessToken);


	// 사용자가 구매한 모든 멤버십 불러오기
	public List<UserMembershipInfoDto> getAllMembership(String accessToken);

	//사용자가 구매한 멤버십의 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay();

	// 온라인콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert(String accessToken);

}
