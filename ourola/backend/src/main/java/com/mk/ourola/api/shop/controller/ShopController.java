package com.mk.ourola.api.shop.controller;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

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
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.service.FanServiceImpl;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.ShoppingCartDto;
import com.mk.ourola.api.shop.service.ShopServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/shop/{group}")
@RequiredArgsConstructor
@Slf4j
public class ShopController {

	private final ShopServiceImpl shopService;
	private final FileServiceImpl fileService;
	private final FanServiceImpl fanService;

	// TODO: 온콘과 멤버십은 아티스트당 보통 1개씩밖에 상품이 없다 -> 굿즈나 구매 콘텐츠를 대비해서 만들어는 놓는다.
	// 상품 전체 목록 (온콘, 멤버십)
	@GetMapping("/online-concert")
	public ResponseEntity<?> getAllOnlineConcert(@PathVariable String group) {
		try {
			List<OnlineConcertDto> onlineConcertList = shopService.getAllOnlineConcertItems(group);
			return new ResponseEntity<>(onlineConcertList, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// @GetMapping("/membership")
	// public ResponseEntity<?> getAllMembership(@PathVariable String group) {
	// 	try {
	// 		List<MembershipPayDto> itemList = shopService.getAllMembershipItems(group);
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
	public ResponseEntity<?> getOnlineConcert(@PathVariable String group, @PathVariable int id) {
		try {
			OnlineConcertDto item = shopService.getOnlineConcertItem(id);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/membership")
	public ResponseEntity<?> getMembership(@PathVariable String group) {
		try {
			MembershipPayDto item = shopService.getMembershipItem(group);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			log.error(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 등록 (소속사만 가능)
	@PostMapping("/online-concert")
	public ResponseEntity<?> writeOnlineConcert(@PathVariable String group,
		@RequestHeader(name = "Authorization") String accessToken, OnlineConcertDto onlineConcertDto,
		@RequestParam(name = "files", required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile) {
		try {
			System.out.println(onlineConcertDto);
			OnlineConcertDto item = shopService.writeOnlineConcert(group, accessToken, onlineConcertDto, mainFile);

			System.out.println(item);
			if (!(files == null)) {
				fileService.writeShopImages(files, item, null);
			}
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 구매
	@PostMapping("/buy")
	public ResponseEntity<?> purchaseProduct(@RequestHeader(name = "Authorization") String accessToken,
		@RequestParam(name = "fanDtoId") int fanDtoId,
		@RequestParam(name = "memDtoId", required = false) Integer memDtoId,
		@RequestParam(name = "conDtoId", required = false) Integer conDtoId) {
		try {
			BillDto bill = new BillDto();
			bill.setFanDto(fanService.getFanInfo(fanDtoId));

			if (memDtoId != null) {
				bill.setMembershipPayDto(shopService.getMembershipItemById(memDtoId));
			}

			if (conDtoId != null) {
				bill.setOnlineConcertDto(shopService.getOnlineConcertItem(conDtoId));
			}

			shopService.purchaseProduct(accessToken, bill);
			return new ResponseEntity<>("구매 성공!", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/membership")
	public ResponseEntity<?> writeMembership(@PathVariable String group,
		@RequestHeader(name = "Authorization") String accessToken, MembershipPayDto membershipPayDto,
		@RequestParam(required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile
	) {
		try {
			System.out.println(membershipPayDto);
			MembershipPayDto item = shopService.writeMembership(group, accessToken, membershipPayDto, mainFile);
			if (!(files == null)) {
				fileService.writeShopImages(files, null, item);
			}
			// if(!mainFile.isEmpty()) {
			// 	fileService.writeShopMainImage(mainFile, null, item);
			// }
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			// log.info(e.getMessage());
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	// 상품 수정 (소속사만 가능)
	// 수정 시 DTO에 상품 아이디 필수
	@PutMapping("/online-concert/{id}")
	@Transactional
	public ResponseEntity<?> modifyOnlineConcert(@PathVariable String group,
		@RequestHeader(name = "Authorization") String accessToken, OnlineConcertDto onlineConcertDto,
		@RequestParam(required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile
	) {
		try {
			OnlineConcertDto item = shopService.modifyOnlineConcert(group, accessToken, onlineConcertDto, mainFile);
			fileService.writeShopImages(files, item, null);
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/membership/{id}")
	public ResponseEntity<?> modifyMembership(@PathVariable String group,
		@RequestHeader(name = "Authorization") String accessToken, MembershipPayDto membershipPayDto,
		@RequestParam(required = false) List<MultipartFile> files,
		@RequestParam(name = "main-file", required = false) MultipartFile mainFile
	) {
		try {
			MembershipPayDto item = shopService.modifyMembership(group, accessToken, membershipPayDto, mainFile);
			if (!(files == null)) {
				fileService.writeShopImages(files, null, item);
			}
			return new ResponseEntity<>(item, HttpStatus.OK);
		} catch (Exception e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 상품 삭제 (소속사만 가능)
	@DeleteMapping("/online-concert/{id}")
	public ResponseEntity<?> deleteOnlineConcert(@PathVariable String group,
		@RequestHeader(name = "Authorization") String accessToken, @PathVariable int id) {
		try {
			log.info("online concert delete");
			shopService.deleteOnlineConcert(group, accessToken, id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// @DeleteMapping("/membership/{id}")
	// public ResponseEntity<?> deleteMembership(@PathVariable String group,
	// 	@RequestHeader(name = "Authorization") String accessToken, @PathVariable int id) {
	// 	try {
	// 		shopService.deleteMembership(group, accessToken, id);
	// 		return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

}
