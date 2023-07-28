package com.mk.ourola.api.shop.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.live.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.MembershipPayRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.MembershipPayDto;
import com.mk.ourola.api.user.repository.dto.Role;
import com.mk.ourola.api.user.service.JwtService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ShopServiceImpl implements ShopService {

	private final OnlineConcertRepository onlineConcertRepository;
	private final MembershipPayRepository membershipPayRepository;
	private final GroupRepository groupRepository;
	private final JwtService jwtService;
	private final ArtistUserRepository artistUserRepository;
	private final FanUserRepository fanUserRepository;
	@Override
	public List<OnlineConcertDto> getAllOnlineConcertItems(String artist) {
		int groupId = groupRepository.findByName(artist).getId();
		return onlineConcertRepository.findByGroupChannelDto_Id(groupId);
	}

	// @Override
	// public List<MembershipPayDto> getAllMembershipItems(String artist) {
	// 	int groupId = groupRepository.findByName(artist).getId();
	// 	return membershipPayRepository.findByGroupChannelDto_Id(groupId).get();
	// }

	@Override
	public OnlineConcertDto getOnlineConcertItem(String artist, int id) {
		// int groupId = groupRepository.findByName(artist).getId();
		return onlineConcertRepository.findById(id);
	}

	@Override
	public MembershipPayDto getMembershipItem(String artist, int id) {
		// int groupId = groupRepository.findByName(artist).getId();
		return membershipPayRepository.findById(id).get();
	}

	@Override
	public OnlineConcertDto writeOnlineConcert(String artist, String accessToken, OnlineConcertDto onlineConcertDto) throws Exception{
		log.info("writeOnlineConcert");
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		log.info("email: "+email+", role: "+role);
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
				&& user.getIsAdmin()){	// 관리자인지
				return onlineConcertRepository.save(onlineConcertDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				return onlineConcertRepository.save(onlineConcertDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
		// return onlineConcertRepository.save(onlineConcertDto);
	}

	@Override
	public MembershipPayDto writeMembership(String artist, String accessToken, MembershipPayDto membershipPayDto) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
				&& user.getIsAdmin()){	// 관리자인지
				return membershipPayRepository.save(membershipPayDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				return membershipPayRepository.save(membershipPayDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
		// return membershipPayRepository.save(membershipPayDto);
	}

	@Override
	public OnlineConcertDto modifyOnlineConcert(String artist, String accessToken, OnlineConcertDto onlineConcertDto) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
				&& user.getIsAdmin()){	// 관리자인지
				log.info(onlineConcertDto.toString());
				return onlineConcertRepository.save(onlineConcertDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				return onlineConcertRepository.save(onlineConcertDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
		// return onlineConcertRepository.save(onlineConcertDto);
	}

	@Override
	public MembershipPayDto modifyMembership(String artist, String accessToken, MembershipPayDto membershipPayDto) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
				&& user.getIsAdmin()){	// 관리자인지
				return membershipPayRepository.save(membershipPayDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				return membershipPayRepository.save(membershipPayDto);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
		// return membershipPayRepository.save(membershipPayDto);
	}

	@Override
	public void deleteOnlineConcert(String artist, String accessToken, int id) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
				&& user.getIsAdmin()){	// 관리자인지
				onlineConcertRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				onlineConcertRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
		// onlineConcertRepository.deleteById(id);
	}

	@Override
	public void deleteMembership(String artist, String accessToken, int id) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ARTIST.getKey())) {	// 채널(소속사) 관리자인지 확인
			ArtistUserDto user = artistUserRepository.findByEmail(email).get();
			if(user.getGroupChannelDto().getName().equals(artist)	// 해당 채널 소속인지
			&& user.getIsAdmin()){	// 관리자인지
				membershipPayRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanUserDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				membershipPayRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
	}
}
