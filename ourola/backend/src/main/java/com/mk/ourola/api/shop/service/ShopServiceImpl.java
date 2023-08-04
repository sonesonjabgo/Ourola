package com.mk.ourola.api.shop.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.live.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.MembershipPayRepository;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

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
	private final ArtistRepository artistUserRepository;
	private final FanRepository fanUserRepository;
	private final FileServiceImpl fileService;

	@Override
	public List<OnlineConcertDto> getAllOnlineConcertItems(String artist) {
		int groupId = groupRepository.findByName(artist).getId();
		return onlineConcertRepository.findByGroupDto_Id(groupId);
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
	public OnlineConcertDto writeOnlineConcert(String artist, String accessToken,
		OnlineConcertDto onlineConcertDto, MultipartFile mainFile) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();

		String filePath = null;
		if(!(mainFile == null)) {
			filePath = fileService.ShopMainImageToPath(mainFile);
		}

		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
			GroupDto groupDto = groupRepository.findByName(artist);
			onlineConcertDto.setGroupDto(groupDto);
			onlineConcertDto.setFilePath(filePath);
			return onlineConcertRepository.save(onlineConcertDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		// if (role.equals(Role.CHANNEL_ADMIN.getKey())) {    // 채널(소속사) 관리자인지 확인
		// 	ArtistDto user = artistUserRepository.findByEmail(email).get();
		// 	if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
		// 		&& user.getIsAdmin()) {    // 관리자인지
		// 		GroupDto groupDto = groupRepository.findByName(artist);
		// 		onlineConcertDto.setGroupDto(groupDto);
		// 		onlineConcertDto.setFilePath(filePath);
		// 		return onlineConcertRepository.save(onlineConcertDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// } else {    // 전체 관리자인지
		// 	FanDto user = fanUserRepository.findByEmail(email).get();
		// 	if (user.isAdmin()) {
		// 		GroupDto groupDto = groupRepository.findByName(artist);
		// 		onlineConcertDto.setGroupDto(groupDto);
		// 		onlineConcertDto.setFilePath(filePath);
		// 		return onlineConcertRepository.save(onlineConcertDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// }
		// return onlineConcertRepository.save(onlineConcertDto);
	}

	@Override
	public MembershipPayDto writeMembership(String artist, String accessToken, MembershipPayDto membershipPayDto, MultipartFile mainFile) throws
		Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();

		String filePath = null;
		if(!(mainFile == null)) {
			filePath = fileService.ShopMainImageToPath(mainFile);
		}

		log.info("filePath: "+filePath);
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
			GroupDto groupDto = groupRepository.findByName(artist);
			membershipPayDto.setGroupDto(groupDto);
			membershipPayDto.setFilePath(filePath);
			return membershipPayRepository.save(membershipPayDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
		// if (role.equals(Role.CHANNEL_ADMIN.getKey())) {    // 채널(소속사) 관리자인지 확인
		// 	ArtistDto user = artistUserRepository.findByEmail(email).get();
		// 	if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
		// 		&& user.getIsAdmin()) {    // 관리자인지
		// 		GroupDto groupDto = groupRepository.findByName(artist);
		// 		membershipPayDto.setGroupDto(groupDto);
		// 		membershipPayDto.setFilePath(filePath);
		// 		return membershipPayRepository.save(membershipPayDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// } else {    // 전체 관리자인지
		// 	FanDto user = fanUserRepository.findByEmail(email).get();
		// 	if (user.isAdmin()) {
		// 		GroupDto groupDto = groupRepository.findByName(artist);
		// 		membershipPayDto.setGroupDto(groupDto);
		// 		return membershipPayRepository.save(membershipPayDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// }
		// return membershipPayRepository.save(membershipPayDto);
	}

	@Override
	public OnlineConcertDto modifyOnlineConcert(String artist, String accessToken,
		OnlineConcertDto onlineConcertDto, MultipartFile mainFile) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();

		String filePath = null;
		if(!(mainFile == null)) {
			filePath = fileService.ShopMainImageToPath(mainFile);
		}
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
			GroupDto groupDto = groupRepository.findByName(artist);
			onlineConcertDto.setGroupDto(groupDto);
			onlineConcertDto.setFilePath(filePath);
			return onlineConcertRepository.save(onlineConcertDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
		// if (role.equals(Role.ARTIST.getKey())) {    // 채널(소속사) 관리자인지 확인
		// 	ArtistDto user = artistUserRepository.findByEmail(email).get();
		// 	if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
		// 		&& user.getIsAdmin()) {    // 관리자인지
		// 		log.info(onlineConcertDto.toString());
		// 		return onlineConcertRepository.save(onlineConcertDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// } else {    // 전체 관리자인지
		// 	FanDto user = fanUserRepository.findByEmail(email).get();
		// 	if (user.isAdmin()) {
		// 		return onlineConcertRepository.save(onlineConcertDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// }
		// return onlineConcertRepository.save(onlineConcertDto);
	}

	@Override
	public MembershipPayDto modifyMembership(String artist, String accessToken,
		MembershipPayDto membershipPayDto, MultipartFile mainFile) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();

		String filePath = null;
		if(!(mainFile == null)) {
			filePath = fileService.ShopMainImageToPath(mainFile);
		}

		log.info(role+" "+email);
		log.info(artistUserRepository.findByEmail(email).get().getGroupDto().getName());

		log.info("filePath: "+filePath);
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
			GroupDto groupDto = groupRepository.findByName(artist);
			membershipPayDto.setGroupDto(groupDto);
			membershipPayDto.setFilePath(filePath);
			return membershipPayRepository.save(membershipPayDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		// if (role.equals(Role.ARTIST.getKey())) {    // 채널(소속사) 관리자인지 확인
		// 	ArtistDto user = artistUserRepository.findByEmail(email).get();
		// 	if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
		// 		&& user.getIsAdmin()) {    // 관리자인지
		// 		return membershipPayRepository.save(membershipPayDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// } else {    // 전체 관리자인지
		// 	FanDto user = fanUserRepository.findByEmail(email).get();
		// 	if (user.isAdmin()) {
		// 		return membershipPayRepository.save(membershipPayDto);
		// 	} else {
		// 		throw new Exception("ERROR :: 관리자 권한입니다.");
		// 	}
		// }
		// return membershipPayRepository.save(membershipPayDto);
	}

	@Override
	public void deleteOnlineConcert(String artist, String accessToken, int id) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if (role.equals(Role.ARTIST.getKey())) {    // 채널(소속사) 관리자인지 확인
			ArtistDto user = artistUserRepository.findByEmail(email).get();
			if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
				&& user.getIsAdmin()) {    // 관리자인지
				onlineConcertRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanDto user = fanUserRepository.findByEmail(email).get();
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
		if (role.equals(Role.ARTIST.getKey())) {    // 채널(소속사) 관리자인지 확인
			ArtistDto user = artistUserRepository.findByEmail(email).get();
			if (user.getGroupDto().getName().equals(artist)    // 해당 채널 소속인지
				&& user.getIsAdmin()) {    // 관리자인지
				membershipPayRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		} else {    // 전체 관리자인지
			FanDto user = fanUserRepository.findByEmail(email).get();
			if (user.isAdmin()) {
				membershipPayRepository.deleteById(id);
			} else {
				throw new Exception("ERROR :: 관리자 권한입니다.");
			}
		}
	}
}
