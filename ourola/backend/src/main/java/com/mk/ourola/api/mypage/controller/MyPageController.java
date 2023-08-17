package com.mk.ourola.api.mypage.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.service.BookmarkServiceImpl;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;
import com.mk.ourola.api.mypage.service.MyPageServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MyPageController {
	private final MyPageServiceImpl myPageService;
	private final JwtService jwtService;
	private final BookmarkServiceImpl bookmarkService;


	// 개인정보 확인
	// FIXME : 유저 DTO 수정되는 대로 다시 건드리기
	// 사용자 정보 불러오기
	@GetMapping("/userinfo")
	public ResponseEntity<Object> getUserInfo(@RequestHeader("Authorization") String accessToken) {
		try {
			String role = myPageService.getRole(accessToken);
			if (role.equals("USER") || role.equals("ADMIN")) {
				return new ResponseEntity<>(myPageService.getFanUserInfo(accessToken), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(myPageService.getArtistUserInfo(accessToken), HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 아티스트인지 유저인지 확인하기
	@GetMapping("/role")
	public ResponseEntity<String> getRole(@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<String>(myPageService.getRole(accessToken), HttpStatus.OK);
		} catch (Exception e) {
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
	@PutMapping("/artist/modify/nickname/{nickname}")
	public ResponseEntity<ArtistDto> modifyArtistNickname(@RequestHeader String accessToken,
		@PathVariable("nickname") String newNickname) {
		try {
			return new ResponseEntity<ArtistDto>(myPageService.modifyArtistNickname(accessToken, newNickname),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 비밀번호 수정
	@PutMapping("/artist/modify/password/{password}")
	public HttpStatus modifyArtistPassword(@RequestHeader String accessToken, @PathVariable("password") String newPassword) {
		try {
			myPageService.modifyArtistPassword(accessToken, newPassword);
			return HttpStatus.OK;
		} catch (Exception e) {
			return HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}

	// 팬 닉네임 수정
	@PutMapping("/modify/nickname/{nickname}")
	public ResponseEntity<FanDto> modifyFanNickname(@RequestHeader("Authorization") String accessToken,
		@PathVariable("nickname") String newNickname) {
		try {
			System.out.println(newNickname);
			return new ResponseEntity<FanDto>(myPageService.modifyFanNickname(accessToken, newNickname),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 팬 닉네임 중복 체크
	@GetMapping("/modify/nickname/check-duplicate/{nickname}")
	public ResponseEntity<?> checkNicknameDuplicate(@RequestHeader("Authorization") String header, @PathVariable("nickname") String nickname) {
		try {
			return new ResponseEntity<>(myPageService.checkNicknameDuplicate(header, nickname), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/modify/password/{password}")
	public HttpStatus modifyFanPassword(@RequestHeader("Authorization") String accessToken,
		@PathVariable("password") String newPassword) {
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
	public ResponseEntity<List<UserMembershipInfoDto>> getAllMembershipPurchase(
		@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<List<UserMembershipInfoDto>>(myPageService.getAllMembershipPurchase(accessToken),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 온라인 콘서트 구매 내역 불러옴
	@GetMapping("/purchase/online-concert")
	public ResponseEntity<List<OnlineConcertDto>> getAllOnlineConcertPurchase(
		@RequestHeader("Authorization") String accessToken) {
		try {
			return new ResponseEntity<List<OnlineConcertDto>>(myPageService.getAllOnlineConcertPurchase(accessToken),
				HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 그룹 채널의 멤버십 구매 여부를 알려줌
	@GetMapping("/{group}/membership")
	public ResponseEntity<Boolean> isMembership(@RequestHeader("Authorization") String accessToken,
		@PathVariable String group) {
		try {
			return new ResponseEntity<Boolean>(myPageService.isMembership(accessToken, group), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자가 특정 온라인 콘서트의 티켓을 구매했는지 확인
	@GetMapping("/purchase/online-concert/{concertId}")
	public ResponseEntity<Boolean> isConcertTicket(@RequestHeader("Authorization") String accessToken, @PathVariable(name = "concertId") int concertId){
		try{
			return new ResponseEntity<Boolean>(myPageService.isConcertTicket(accessToken, concertId),HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자가 작성한 피드 목록 불러옴
	@GetMapping("/posts")
	public ResponseEntity<List<FeedDto>> getMyFeed(@RequestHeader("Authorization") String accessToken){
		try {
			return new ResponseEntity<>(myPageService.getMyFeed(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자가 작성한 댓글 목록 불러옴
	@GetMapping("/comments")
	public ResponseEntity<List<CommentDto>> getMyComment(@RequestHeader("Authorization") String accessToken){
		try {
			return new ResponseEntity<>(myPageService.getMyComment(accessToken), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자가 저장한 북마크 목록 불러옴
	@GetMapping("/bookmark")
	public ResponseEntity<List<BookmarkDto>> getMyBookmark(@RequestHeader(name = "Authorization") String accessToken) {
		try {
			Optional<String> role = jwtService.extractRole(jwtService.headerStringToAccessToken(accessToken).get());
			Integer userId = jwtService.accessTokenToUserId(accessToken);
			List<BookmarkDto> bookmarkList = bookmarkService.getBookmarkList(role.get(), userId);
			return new ResponseEntity<>(bookmarkList, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
