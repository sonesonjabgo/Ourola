package com.mk.ourola.api.mypage.controller;

import java.util.List;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;
import com.mk.ourola.api.mypage.service.MyPageServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MyPageController {
	private final MyPageServiceImpl myPageService;

	// TODO : component가 바뀌도록 할건데 일단 페이지 바뀌는걸로 함
	// FIXME : 추후 component가 바뀌도록 하자

	// 개인정보 확인
	// FIXME : 유저 DTO 수정되는 대로 다시 건드리기
	// 사용자 정보 불러오기
	@GetMapping("/userinfo")
	public ResponseEntity<Object> getUserInfo(@RequestHeader("Authorization") String accessToken) {
		try {
			String role = myPageService.getRole(accessToken);
			if(role.equals("USER") || role.equals("GUEST")){
				return new ResponseEntity<>(myPageService.getFanUserInfo(accessToken), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(myPageService.getArtistUserInfo(accessToken), HttpStatus.OK);
			}
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 아티스트인지 유저인지 확인하기
	@GetMapping("/role")
	public ResponseEntity<String> getRole(@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<String>(myPageService.getRole(accessToken), HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 아티스트 개인정보 불러오기
	@GetMapping("/artist/userinfo")
	public ResponseEntity<ArtistDto> getArtistUserInfo(@RequestHeader String accessToken) {
		try {
			return new ResponseEntity<ArtistDto>(myPageService.getArtistUserInfo(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 아티스트 닉네임 수정
	@PutMapping("/artist/modify/nickname")
	public ResponseEntity<ArtistDto> modifyArtistNickname(@RequestHeader String accessToken,
		@RequestBody ArtistDto newNickname) {
		try {
			return new ResponseEntity<ArtistDto>(myPageService.modifyArtistNickname(accessToken, newNickname),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 비밀번호 수정
	@PutMapping("/artist/modify/password")
	public HttpStatus modifyArtistPassword(@RequestHeader String accessToken, @RequestBody ArtistDto newPassword) {
		try {
			myPageService.modifyArtistPassword(accessToken, newPassword);
			return HttpStatus.OK;
		} catch (Exception e) {
			return HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}

	// 팬 개인정보
	// 팬 개인정보 불러오기
	@GetMapping("/userinfo")
	public ResponseEntity<FanDto> getFanUserInfo(@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<FanDto>(myPageService.getFanUserInfo(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 팬 닉네임 수정
	@PutMapping("/modify/nickname")
	public ResponseEntity<FanDto> modifyFanNickname(@RequestHeader("Authorization") String accessToken,
		@RequestBody FanDto newNickname) {
		try {
			System.out.println(newNickname);
			return new ResponseEntity<FanDto>(myPageService.modifyFanNickname(accessToken, newNickname),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/modify/password")
	public HttpStatus modifyFanPassword(@RequestHeader("Authorization") String accessToken, @RequestBody FanDto newPassword) {
		try {
			System.out.println(newPassword);
			myPageService.modifyFanPassword(accessToken, newPassword);
			return HttpStatus.OK;
		} catch (Exception e) {
			return HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}

	// 모든 구매 내역 불러옴
	@GetMapping("/purchase")
	public ResponseEntity<List<BillDto>> getAllBill(@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<List<BillDto>>(myPageService.getAllBill(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 멤버십 구매 내역 불러음
	@GetMapping("/purchase/membership")
	public ResponseEntity<List<UserMembershipInfoDto>> getAllMembershipPurchase(@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<List<UserMembershipInfoDto>>(myPageService.getAllMembershipPurchase(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 온라인 콘서트 구매 내역 불러옴
	@GetMapping("/purchase/online-concert")
	public ResponseEntity<List<OnlineConcertDto>> getAllOnlineConcertPurchase(@RequestHeader("Authorization") String accessToken){
		try {
			return new ResponseEntity<List<OnlineConcertDto>>(myPageService.getAllOnlineConcertPurchase(accessToken), HttpStatus.OK);
		} catch (Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
