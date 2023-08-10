package com.mk.ourola.api.mypage.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.service.FanServiceImpl;
import com.mk.ourola.api.mypage.service.ShoppingCartService;
import com.mk.ourola.api.mypage.service.ShoppingCartServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart")
public class ShoppingCartController {
	private final FanServiceImpl fanService;
	private final ShoppingCartServiceImpl shoppingCartService;

	// 사용자의 장바구니 목록을 다 가져온다
	@GetMapping("")
	public ResponseEntity<?> getShoppingCart(@RequestHeader("Authorization") String header) {
		try {
			return new ResponseEntity<>(shoppingCartService.getShoppingCart(header), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 장바구니에 온라인콘서트 항목을 추가한다
	// id : 온라인콘서트 id
	@PostMapping("/online-concert/{id}")
	public ResponseEntity<?> writeShppingCartOnlineConcert(@RequestHeader("Authorization") String header, @PathVariable int id) {
		try {
			return new ResponseEntity<>(shoppingCartService.writeShoppingCartOnlineconcert(header, id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 장바구니에 멤버십 항목을 추가한다.
	// id : 멤버십 id
	@PostMapping("/membership/{id}")
	public ResponseEntity<?> writeShppingCartMembership(@RequestHeader("Authorization") String header, @PathVariable int id) {
		try {
			return new ResponseEntity<>(shoppingCartService.writeShoppingCartMembership(header, id), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 장바구니 항목을 삭제한다.
	// id : 장바구니 id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteShoppingCart(@RequestHeader("Authorization") String header, @PathVariable int id) {
		try {
			shoppingCartService.deleteShoppingCart(header, id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
