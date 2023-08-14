package com.mk.ourola.api.mypage.service;

import java.util.List;

import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;
import com.mk.ourola.api.mypage.repository.dto.ShoppingCartDto;

public interface ShoppingCartService {

	List<ShoppingCartDto> getShoppingCart(String header) throws Exception;

	ShoppingCartDto writeShoppingCartOnlineconcert(String header, int id) throws Exception;

	ShoppingCartDto writeShoppingCartMembership(String header, int id) throws Exception;

	void deleteShoppingCart(String header, int id) throws Exception;
}
