package com.mk.ourola.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.repository.BillRepository;
import com.mk.ourola.repository.BookMarkRepository;
import com.mk.ourola.repository.GroupRepository;
import com.mk.ourola.repository.MembershipPayRepository;
import com.mk.ourola.repository.OnlineConcertRepository;
import com.mk.ourola.repository.dto.BookMarkDto;
import com.mk.ourola.repository.dto.MembershipPayDto;
import com.mk.ourola.repository.dto.OnlineConcertDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageService {

	private final GroupRepository groupRepository;

	private final BookMarkRepository bookMarkRepository;

	private final MembershipPayRepository membershipPayRepository;

	private final OnlineConcertRepository onlineConcertRepository;

	private final BillRepository billRepository;

	// 북마크 내역 가져오기
	public List<BookMarkDto> getAllBookMark(String userName) {
		return bookMarkRepository.findByUserId(1);
	}

	// 멤버십 구매 내역 가져오기
	public List<MembershipPayDto> getAllMembershipPay() {
		return membershipPayRepository.findAll();
	}

	// 온라인콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert() {
		return onlineConcertRepository.findAll();
	}

	// 그룹 별 온라인 콘서트 구매 내역 가져오기
	public List<OnlineConcertDto> getOnlineConcert(String artist){
		int groupId = groupRepository.findByName(artist).getId();
		return onlineConcertRepository.findByGroupChannelDto_Id(groupId);
	}
}
