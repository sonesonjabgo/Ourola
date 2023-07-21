package com.mk.ourola.api.user.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

public interface MyPageService {

	// 사용자가 구매한 모든 구매내역 가져오기
	public List<BillDto> getAllBill(String userName);

	// 사용자가 북마크한 모든 내역 가져오기
	public List<BookMarkDto> getAllBookMark(String userName);

	// 사용자가 구매한 모든 멤버십 불러오기
	public List<UserMembershipInfoDto> getAllMembership(String userName);

	//사용자가 구매한 멤버십의 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay();

	// 온라인콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert();

}
