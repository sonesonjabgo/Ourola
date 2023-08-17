package com.mk.ourola.api.mypage.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.CommentRepository;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.BillRepository;
import com.mk.ourola.api.mypage.repository.MembershipPayRepository;
import com.mk.ourola.api.mypage.repository.UserMembershipInfoRepository;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService {

	private final FanRepository fanRepository;
	private final ArtistRepository artistRepository;

	private final BillRepository billRepository;

	private final UserMembershipInfoRepository userMembershipInfoRepository;
	private final MembershipPayRepository membershipPayRepository;

	private final FeedRepository feedRepository;
	private final CommentRepository commentRepository;

	private final JwtService jwtService;

	// 팬인지 아티스트인지 구별
	public String getRole(String accessToken) throws Exception {
		return jwtService.extractRole(jwtService.headerStringToAccessToken(accessToken).get()).get();
	}

	// TODO : userDto 수정되는대로 다시 구현
	// 아티스트 개인정보
	// 아티스트의 개인정보 가져오기
	public ArtistDto getArtistUserInfo(String accessToken) throws Exception {
		int aid = jwtService.accessTokenToUserId(accessToken);

		ArtistDto artist = artistRepository.findById(aid)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));
		return artist;
	}

	// 아티스트 닉네임 수정
	public ArtistDto modifyArtistNickname(String accessToken, String newNickname) throws Exception {
		int aid = jwtService.accessTokenToUserId(accessToken);
		ArtistDto artist = artistRepository.findById(aid)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		artist.setNickname(newNickname);
		artistRepository.save(artist);
		return artist;

	}

	// 아티스트 비밀번호 수정
	public void modifyArtistPassword(String accessToken, String newPassword) throws Exception {
		int aid = jwtService.accessTokenToUserId(accessToken);
		ArtistDto artist = artistRepository.findById(aid)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		artist.setPassword(newPassword);
		artistRepository.save(artist);
		return;
	}

	// 팬 개인정보

	// 팬 개인정보 가져오기
	public FanDto getFanUserInfo(String accessToken) throws Exception {
		int uid = jwtService.accessTokenToUserId(accessToken);
		FanDto fan = fanRepository.findById(uid)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));
		return fan;
	}

	// 팬 닉네임 수정
	public FanDto modifyFanNickname(String accessToken, String newNickname) throws Exception {
		int uid = jwtService.accessTokenToUserId(accessToken);
		FanDto fan = fanRepository.findById(uid)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		fan.setNickname(newNickname);
		fanRepository.save(fan);
		return fan;
	}

	public boolean checkNicknameDuplicate(String header, String nickname) throws Exception {
		int fanId = jwtService.accessTokenToUserId(header);
		if(fanRepository.checkNicknameDuplicate(fanId, nickname).isEmpty()) {
			return false;
		} else {
			return true;
		}
	}

	// 팬 비밀번호 수정
	public void modifyFanPassword(String accessToken, String newPassword) throws Exception {
		int uid = jwtService.accessTokenToUserId(accessToken);
		FanDto fan = fanRepository.findById(uid)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		fan.setPassword(newPassword);
		fanRepository.save(fan);
		return;
	}

	// 전체 구매 내역 가져오기
	public List<BillDto> getAllBill(String accessToken) {
		return billRepository.findByFanDto_Id(jwtService.accessTokenToUserId(accessToken));
	}

	// 사용자가 가입한 전체 멤버십 구매 내역 가져오기
	public List<UserMembershipInfoDto> getAllMembershipPurchase(String accessToken) {
		Optional<FanDto> user = fanRepository.findById(jwtService.accessTokenToUserId(accessToken));
		return userMembershipInfoRepository.findByFanDto_Id(user.get().getId());
	}

	// 사용자가 가입한 멤버십 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay() {
		// 받아오기
		return membershipPayRepository.findById(1);
	}

	// 사용자가 구매한 온라인콘서트 전체 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcertPurchase(String accessToken) {
		int uid = jwtService.accessTokenToUserId(accessToken);
		List<BillDto> onlineConcert = billRepository.findByFanDto_IdAndOnlineConcertDto_IdIsNotNull(uid);
		if (!onlineConcert.isEmpty()) {
			List<OnlineConcertDto> list = new ArrayList<>();
			for (BillDto bill : onlineConcert) {
				list.add(bill.getOnlineConcertDto());
			}
			return list;
		} else {
			return null;
		}
	}

	// 해당 그룹의 멤버십에 가입이 되어있는지 확인하기
	@Override
	public boolean isMembership(String accessToken, String groupName) {
		Optional<UserMembershipInfoDto> membershipInfo = userMembershipInfoRepository.findByFanDto_IdAndGroupName(
			jwtService.accessTokenToUserId(accessToken), groupName);
		return membershipInfo.isPresent();
	}

	// 특정 온라인 콘서트의 티켓을 구매했는지 여부
	@Override
	public boolean isConcertTicket(String accessToken, int concertId) throws Exception {
		int uid = jwtService.accessTokenToUserId(accessToken);
		return billRepository.existsByFanDto_IdAndOnlineConcertDto_Id(uid, concertId);
	}

	// 사용자가 작성한 피드 가져오기
	@Override
	public List<FeedDto> getMyFeed(String accessToken) {
		String role = jwtService.extractRole(jwtService.headerStringToAccessToken(accessToken).get()).orElse(null);
		int uid = jwtService.accessTokenToUserId(accessToken);
		List<FeedDto> feedList;
		if (role.equals("USER") || role.equals("GUEST") || role.equals("ADMIN")) {
			feedList = feedRepository.findByFanDto_Id(uid);
		} else {
			feedList = feedRepository.findByArtistDto_Id(uid);
		}
		return feedList;
	}

	// 사용자가 작성한 댓글 가져오기
	@Override
	public List<CommentDto> getMyComment(String accessToken) {
		String role = jwtService.extractRole(jwtService.headerStringToAccessToken(accessToken).get()).orElse(null);
		int uid = jwtService.accessTokenToUserId(accessToken);
		List<CommentDto> commentList;
		if (role.equals("USER") || role.equals("GUEST") || role.equals("ADMIN")) {
			commentList = commentRepository.findByFanDto_Id(uid);
		} else {
			commentList = commentRepository.findByArtistDto_Id(uid);
		}
		return commentList;
	}

}
