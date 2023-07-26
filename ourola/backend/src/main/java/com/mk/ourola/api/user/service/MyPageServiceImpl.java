package com.mk.ourola.api.user.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.BillRepository;
import com.mk.ourola.api.user.repository.BookMarkRepository;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.MembershipPayRepository;
import com.mk.ourola.api.user.repository.UserMembershipInfoRepository;
import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService {

	private final FanUserRepository fanUserRepository;
	private final ArtistUserRepository artistUserRepository;

	private final BillRepository billRepository;
	private final BookMarkRepository bookMarkRepository;

	private final UserMembershipInfoRepository userMembershipInfoRepository;
	private final MembershipPayRepository membershipPayRepository;

	private final JwtService jwtService;

	// TODO : userDto 수정되는대로 다시 구현
	// 아티스트 개인정보
	// 아티스트의 개인정보 가져오기
	public ArtistUserDto getArtistUserInfo(String accessToken) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();

		ArtistUserDto artist = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));
		return artist;
	}

	// 아티스트 닉네임 수정
	public ArtistUserDto modifyArtistNickname(String accessToken, String newNickname) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto artist = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		artist.setNickname(newNickname);
		artistUserRepository.save(artist);
		return artist;

	}

	// 아티스트 비밀번호 수정
	public void modifyArtistPassword(String accessToken, String newPassword) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto artist = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		artist.setPassword(newPassword);
		artistUserRepository.save(artist);
		return;
	}

	// 팬 개인정보

	// 팬 개인정보 가져오기
	public FanUserDto getFanUserInfo(String accessToken) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();
		FanUserDto fan = fanUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		return fan;
	}

	// 팬 닉네임 수정
	public FanUserDto modifyFanNickname(String accessToken, String newNickname) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();
		FanUserDto fan = fanUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		fan.setNickname(newNickname);
		fanUserRepository.save(fan);
		return fan;
	}

	// 팬 비밀번호 수정
	public void modifyFanPassword(String accessToken, String newPassword) throws Exception {
		String email = jwtService.extractEmail(accessToken).get();
		FanUserDto fan = fanUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		fan.setPassword(newPassword);
		fanUserRepository.save(fan);
		return;
	}

	// 전체 구매 내역 가져오기
	public List<BillDto> getAllBill(String accessToken) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(jwtService.extractEmail(accessToken).get());
		return user.map(fanUserDto -> billRepository.findByFanUserDto_Id(fanUserDto.getId())).orElse(null);
	}

	// 북마크 내역 가져오기
	public List<BookMarkDto> getAllBookMark(String accessToken) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(jwtService.extractEmail(accessToken).get());
		return bookMarkRepository.findByFanUserDto_Id(user.get().getId());
	}

	// 사용자가 가입한 전체 멤버십 구매 내역 가져오기
	public List<UserMembershipInfoDto> getAllMembership(String accessToken) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(jwtService.extractEmail(accessToken).get());
		return userMembershipInfoRepository.findByFanUserDto_Id(user.get().getId());
	}

	// 사용자가 가입한 멤버십 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay() {
		// 받아오기
		return membershipPayRepository.findById(1);
	}

	// 사용자가 구매한 온라인콘서트 전체 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert(String accessToken) {
		String email = jwtService.extractEmail(accessToken).get();
		int uid = fanUserRepository.findByEmail(email).get().getId();
		List<BillDto> onlineConcert = billRepository.findByFanUserDto_IdAndOnlineConcertDto_IdIsNotNull(uid);
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
}
