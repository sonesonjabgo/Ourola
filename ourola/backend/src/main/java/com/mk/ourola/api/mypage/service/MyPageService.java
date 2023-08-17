package com.mk.ourola.api.mypage.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

public interface MyPageService {

	ArtistDto getArtistUserInfo(String accessToken) throws Exception;

	// 아티스트 닉네임 수정
	ArtistDto modifyArtistNickname(String accessToken, String newNickname) throws Exception;

	// 아티스트 비밀번호 수정
	void modifyArtistPassword(String accessToken, String newPassword) throws Exception;

	// 팬 개인정보
	// 팬 개인정보 가져오기
	FanDto getFanUserInfo(String accessToken) throws Exception;

	// 팬 닉네임 수정
	FanDto modifyFanNickname(String accessToken, String newNickname) throws Exception;

	public boolean checkNicknameDuplicate(String header, String nickname) throws Exception;

	// 팬 비밀번호 수정
	void modifyFanPassword(String accessToken, String newPassword) throws Exception;

	// 사용자가 구매한 모든 구매내역 가져오기
	List<BillDto> getAllBill(String accessToken);

	// 사용자가 구매한 모든 멤버십 불러오기
	List<UserMembershipInfoDto> getAllMembershipPurchase(String accessToken);

	//사용자가 구매한 멤버십의 가격 정보 가져오기
	Optional<MembershipPayDto> getMembershipPay();

	// 온라인콘서트 구매 내역 가져오기
	List<OnlineConcertDto> getAllOnlineConcertPurchase(String accessToken);

	// 사용자가 해당 그룹의 멤버십에 가입이 되어있는지 확인
	boolean isMembership(String accessToken, String groupName);

	boolean isConcertTicket(String accessToken, int concertId) throws Exception;

	// 사용자가 작성한 피드 가져오기
	List<FeedDto> getMyFeed(String accessToken);

	// 사용자가 작성한 댓글 가져오기
	List<CommentDto> getMyComment(String accessToken);

}
