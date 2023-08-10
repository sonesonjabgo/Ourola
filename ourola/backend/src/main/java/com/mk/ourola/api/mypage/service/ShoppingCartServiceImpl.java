package com.mk.ourola.api.mypage.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.service.FanServiceImpl;
import com.mk.ourola.api.media.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.MembershipPayRepository;
import com.mk.ourola.api.mypage.repository.ShoppingCartRepository;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.ShoppingCartDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ShoppingCartServiceImpl implements ShoppingCartService{
	private final JwtService jwtService;
	private final FanRepository fanRepository;
	private final ShoppingCartRepository shoppingCartRepository;
	private final OnlineConcertRepository onlineConcertRepository;
	private final MembershipPayRepository membershipPayRepository;
	@Override
	public List<ShoppingCartDto> getShoppingCart(String header) throws Exception {
		FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(header)).orElseThrow();
		return shoppingCartRepository.findByFanDto_Id(fanDto.getId());
	}

	@Override
	public ShoppingCartDto writeShoppingCartOnlineconcert(String header, int id) throws
		Exception {
		FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(header)).orElseThrow();
		OnlineConcertDto onlineConcertDto = onlineConcertRepository.findById(id);
		if(shoppingCartRepository.existsByFanDto_IdAndOnlineConcertDto_Id(fanDto.getId(), id)){
			throw new Exception("이미 장바구니에 추가한 항목입니다.");
		}
		ShoppingCartDto shoppingCartDto = ShoppingCartDto.builder()
			.fanDto(fanDto)
			.onlineConcertDto(onlineConcertDto)
			.build();
		return shoppingCartRepository.save(shoppingCartDto);
	}

	@Override
	public ShoppingCartDto writeShoppingCartMembership(String header, int id) throws
		Exception {
		FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(header)).orElseThrow();
		MembershipPayDto membershipPayDto = membershipPayRepository.findById(id).orElseThrow();
		if(shoppingCartRepository.existsByFanDto_IdAndMembershipPayDto_Id(fanDto.getId(), id)){
			throw new Exception("이미 장바구니에 추가한 항목입니다.");
		}
		ShoppingCartDto shoppingCartDto = ShoppingCartDto.builder()
			.fanDto(fanDto)
			.membershipPayDto(membershipPayDto)
			.build();
		return shoppingCartRepository.save(shoppingCartDto);
	}

	@Override
	public void deleteShoppingCart(String header, int id) throws Exception {
		// FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(header)).orElseThrow();
		shoppingCartRepository.deleteById(id);
	}
}
