package com.mk.ourola.api.shop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.file.repository.ShopFileRepository;
import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.media.onlineconcert.repository.OnlineConcertRepository;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.BillRepository;
import com.mk.ourola.api.mypage.repository.MembershipPayRepository;
import com.mk.ourola.api.mypage.repository.dto.BillDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ShopServiceImpl implements ShopService {

	private final OnlineConcertRepository onlineConcertRepository;
	private final MembershipPayRepository membershipPayRepository;
	private final GroupRepository groupRepository;
	private final JwtService jwtService;
	private final ArtistRepository artistUserRepository;
	private final FanRepository fanUserRepository;
	private final FileServiceImpl fileService;
	private final ShopFileRepository shopFileRepository;
	private final BillRepository billRepository;

	@Override
	public List<OnlineConcertDto> getAllOnlineConcertItems(String artist) {
		int groupId = groupRepository.findByName(artist).getId();
		return onlineConcertRepository.findByGroupDto_IdAndDeleted(groupId, false);
	}

	// @Override
	// public List<MembershipPayDto> getAllMembershipItems(String artist) {
	// 	int groupId = groupRepository.findByName(artist).getId();
	// 	return membershipPayRepository.findByGroupChannelDto_Id(groupId).get();
	// }

	@Override
	public OnlineConcertDto getOnlineConcertItem(int id) {
		// int groupId = groupRepository.findByName(artist).getId();
		// log.info("online concert 조회 :: "+onlineConcertRepository.findById(id));
		return onlineConcertRepository.findById(id);
	}


	@Override
	public MembershipPayDto getMembershipItem(String artist) {
		int groupId = groupRepository.findByName(artist).getId();
		return membershipPayRepository.findByGroupDto_Id(groupId).orElse(null);
	}

	@Override
	public MembershipPayDto getMembershipItemById(int id){
		return membershipPayRepository.findById(id).orElse(null);
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
			log.info("writed onlineConcert :: "+onlineConcertDto);
			return onlineConcertRepository.save(onlineConcertDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
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

			if(membershipPayRepository.findByGroupDto_Id(groupDto.getId()).isPresent()) {
				throw new Exception("Error :: 이미 해당 채널 멤버십이 존재합니다. 수정해주세요.");
			}
			return membershipPayRepository.save(membershipPayDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
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
			OnlineConcertDto oldDto = onlineConcertRepository.findById(onlineConcertDto.getId());
			GroupDto groupDto = groupRepository.findByName(artist);
			onlineConcertDto.setGroupDto(groupDto);

			shopFileRepository.deleteByOnlineConcertDto_Id(onlineConcertDto.getId());

			onlineConcertDto.setFilePath(filePath);
			OnlineConcertDto modified = onlineConcertRepository.save(onlineConcertDto);
			log.info("onlineConcertDto modify :: "+modified);
			return modified;
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
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

			shopFileRepository.deleteByMembershipPayDto_Id(membershipPayDto.getId());

			membershipPayDto.setFilePath(filePath);
			return membershipPayRepository.save(membershipPayDto);
		} else {
			throw new Exception("Error :: 관리자 권한입니다.");
		}
	}

	@Override
	public void deleteOnlineConcert(String artist, String accessToken, int id) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
			// onlineConcertRepository.deleteById(id);
			OnlineConcertDto onlineConcertDto = onlineConcertRepository.findById(id);
			onlineConcertDto.delete();
		} else {
			throw new Exception("ERROR :: 관리자 권한입니다.");
		}
	}

	@Override
	public void deleteMembership(String artist, String accessToken, int id) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		// 시도하는 사용자가 해당 채널(소속사) 관리자인지 확인
		if(role.equals(Role.ADMIN.getKey()) ||
			(role.equals(Role.CHANNEL_ADMIN.getKey()) &&
				artistUserRepository.findByEmail(email).get().getGroupDto().getName().equals(artist))) {
				membershipPayRepository.deleteById(id);
		} else {
			throw new Exception("ERROR :: 관리자 권한입니다.");
		}
	}

	// 사용자가 물건을 구매
	@Override
	public void purchaseProduct(String accessToken, BillDto product) throws Exception {
		billRepository.save(product);
	}
}
