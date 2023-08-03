package com.mk.ourola.api.shop.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.shop.service.ShopServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/shop/{artist}")
@RequiredArgsConstructor
public class ShopController {

	private final ShopServiceImpl shopService;
	private final FileServiceImpl fileService;

	// TODO: 온콘과 멤버십은 아티스트당 보통 1개씩밖에 상품이 없다 -> 굿즈나 구매 콘텐츠를 대비해서 만들어는 놓는다.
	// 상품 전체 목록 (온콘, 멤버십)
	@GetMapping("/online-concert")
	public ResponseEntity<?> getAllOnlineConcert(@PathVariable String artist) {
		try {
			List<OnlineConcertDto> onlineConcertList = shopService.getAllOnlineConcertItems(artist);
			return new ResponseEntity<>(onlineConcertList, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// @GetMapping("/membership")
	// public ResponseEntity<?> getAllMembership(@PathVariable String artist) {
	// 	try {
	// 		List<MembershipPayDto> itemList = shopService.getAllMembershipItems(artist);
	// 		return new ResponseEntity<>(itemList, HttpStatus.OK);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

	// 상품 개별 정보 조회 (온콘, 멤버십)
	// id : 상품 id
	// TODO: 아티스트만 정해지면 상품 아이디까지는 필요 없다.. 고려해보기
	// 이전에 있었던 상품들을 삭제보다 숨기는 방향으로 가면 DB에는 그대로 남아있으니까 select 해야할듯
	@GetMapping("/online-concert/{id}")
	public ResponseEntity<?> getOnlineConcert(@PathVariable String artist, @PathVariable int id) {
		try {
			OnlineConcertDto item = shopService.getOnlineConcertItem(artist, id);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/membership/{id}")
	public ResponseEntity<?> getMembership(@PathVariable String artist, @PathVariable int id) {
		try {
			MembershipPayDto item = shopService.getMembershipItem(artist, id);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 등록 (소속사만 가능)
	@PostMapping("/online-concert")
	public ResponseEntity<?> writeOnlineConcert(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, OnlineConcertDto onlineConcertDto,
		@RequestParam(required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile) {
		try {
			OnlineConcertDto item = shopService.writeOnlineConcert(artist, accessToken, onlineConcertDto);
			if(files != null) {
				fileService.writeShopImages(files, item, null);
			}
			if(mainFile != null) {
				fileService.writeShopMainImages(mainFile, item, null);
			}
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/membership")
	public ResponseEntity<?> writeMembership(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, MembershipPayDto membershipPayDto,
		@RequestParam(required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile
	) {
		try {
			MembershipPayDto item = shopService.writeMembership(artist, accessToken, membershipPayDto);
			if(!files.isEmpty()) {
				fileService.writeShopImages(files, null, item);
			}
			if(!mainFile.isEmpty()) {
				fileService.writeShopMainImages(mainFile, null, item);
			}
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 수정 (소속사만 가능)
	// 수정 시 DTO에 상품 아이디 필수
	@PutMapping("/online-concert")
	public ResponseEntity<?> modifyOnlineConcert(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, @RequestBody OnlineConcertDto onlineConcertDto) {
		try {
			OnlineConcertDto item = shopService.modifyOnlineConcert(artist, accessToken, onlineConcertDto);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/membership")
	public ResponseEntity<?> modifyMembership(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, @RequestBody MembershipPayDto membershipPayDto) {
		try {
			MembershipPayDto item = shopService.modifyMembership(artist, accessToken, membershipPayDto);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 삭제 (소속사만 가능)
	@DeleteMapping("/online-concert/{id}")
	public ResponseEntity<?> deleteOnlineConcert(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, @PathVariable int id) {
		try {
			shopService.deleteOnlineConcert(artist, accessToken, id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/membership/{id}")
	public ResponseEntity<?> deleteMembership(@PathVariable String artist,
		@RequestHeader(name = "Authorization") String accessToken, @PathVariable int id) {
		try {
			shopService.deleteMembership(artist, accessToken, id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
