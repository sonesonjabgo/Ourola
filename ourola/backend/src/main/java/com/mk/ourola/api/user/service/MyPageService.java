package com.mk.ourola.api.user.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

public interface MyPageService {

	public ArtistUserDto getArtistUserInfo(String accessToken) throws Exception;

	// 아티스트 닉네임 수정
	public ArtistUserDto modifyArtistNickname(String accessToken, String newNickname) throws Exception;

	// 아티스트 비밀번호 수정
	public void modifyArtistPassword(String accessToken, String newPassword) throws Exception;

	// 팬 개인정보
	// 팬 개인정보 가져오기
	public FanUserDto getFanUserInfo(String accessToken) throws Exception;

	// 팬 닉네임 수정
	public FanUserDto modifyFanNickname(String accessToken, String newNickname) throws Exception;

	// 팬 비밀번호 수정
	public void modifyFanPassword(String accessToken, String newPassword) throws Exception;

	// 사용자가 구매한 모든 구매내역 가져오기
	public List<BillDto> getAllBill(String accessToken);

	// 사용자가 북마크한 모든 내역 가져오기
	public List<BookMarkDto> getAllBookMark(String accessToken);

	// 사용자가 구매한 모든 멤버십 불러오기
	public List<UserMembershipInfoDto> getAllMembership(String accessToken);

	//사용자가 구매한 멤버십의 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay();

	// 온라인콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert(String accessToken);

}
