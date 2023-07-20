package com.mk.ourola.api.user.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

public interface MyPageService {

	public List<BillDto> getAllBill(String userName);

	public List<BookMarkDto> getAllBookMark(String userName);

	public List<UserMembershipInfoDto> getAllMembership(String userName);

	public Optional<MembershipPayDto> getMembershipPay();

	// 온라인콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert();


}
