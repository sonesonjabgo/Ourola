package com.mk.ourola.api.user.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.BillRepository;
import com.mk.ourola.api.user.repository.BookMarkRepository;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.MembershipPayRepository;
import com.mk.ourola.api.user.repository.UserMembershipInfoRepository;
import com.mk.ourola.api.user.repository.dto.BillDto;
import com.mk.ourola.api.user.repository.dto.BookMarkDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.UserMembershipInfoDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageServiceImpl implements MyPageService {

	private final BillRepository billRepository;

	private final FanUserRepository fanUserRepository;

	private final BookMarkRepository bookMarkRepository;

	private final UserMembershipInfoRepository userMembershipInfoRepository;

	private final MembershipPayRepository membershipPayRepository;

	// TODO : userDto 수정되는대로 다시 구현
	// 사용자의 개인정보 가져오기
	// public FanUserDto getUserInfo(String userEmail) {
	// 	Optional<FanUserDto> user = fanUserRepository.findByEmail(userEmail);
	//	
	// }

	// 전체 구매 내역 가져오기
	public List<BillDto> getAllBill(String userEmail) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(userEmail);
		return user.map(fanUserDto -> billRepository.findByFanUserDto_Id(fanUserDto.getId())).orElse(null);
	}

	// 북마크 내역 가져오기
	public List<BookMarkDto> getAllBookMark(String userEmail) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(userEmail);
		return bookMarkRepository.findByFanUserDto_Id(user.get().getId());
	}

	// 사용자가 가입한 전체 멤버십 구매 내역 가져오기
	public List<UserMembershipInfoDto> getAllMembership(String userEmail) {
		Optional<FanUserDto> user = fanUserRepository.findByEmail(userEmail);
		return userMembershipInfoRepository.findByFanUserDto_Id(user.get().getId());
	}

	// 사용자가 가입한 멤버십 가격 정보 가져오기
	public Optional<MembershipPayDto> getMembershipPay() {
		// 받아오기
		return membershipPayRepository.findById(1);
	}

	// 사용자가 구매한 온라인콘서트 전체 내역 가져오기
	public List<OnlineConcertDto> getAllOnlineConcert() {
		List<BillDto> onlineConcert = billRepository.findByOnlineConcertDto_IdIsNotNull();
		if (!onlineConcert.isEmpty()) {
			List<OnlineConcertDto> list = new ArrayList<>();
			for (BillDto bill : onlineConcert) {
				list.add(bill.getOnlineConcertDto());
			}
			return list;
		} else {
			return null;
		}
	}
}
