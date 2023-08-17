package com.mk.ourola.api.others.announcement.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.others.announcement.repository.AnnouncementRepository;
import com.mk.ourola.api.others.announcement.repository.dto.AnnouncementDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementServiceImpl implements Announcement {
	private final AnnouncementRepository announcementRepository;
	private final GroupRepository groupRepository;
	private final ArtistRepository artistUserRepository;
	private final JwtService jwtService;

	// 게시판 첫 접속 시 전체 공지 정보를 보내는 메서드
	@Transactional()
	public Page<AnnouncementDto> getAllAnnouncement(String groupName, Pageable pageable) throws Exception {
		GroupDto groupChannelDto = groupRepository.findByName(groupName);

		return announcementRepository.findByGroupDto_IdOrderByCreateTimeDesc(groupChannelDto.getId(), pageable);
	}

	// 선택된 하나의 공지의 정보를 보내는 메서드
	public AnnouncementDto getAnnouncement(String groupName, int announcementId) throws Exception {
		return announcementRepository.findById(announcementId);
	}

	// 소속사 직원이 공지를 만드는 메서드
	public AnnouncementDto writeAnnouncement(String groupName, String accessToken,
		AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get()).get();

		if (decodingEmail == null) {
			throw new Exception("email 추출 실패"); // 세세한 예외 처리 필요
		}

		GroupDto groupChannelDto = groupRepository.findByName(groupName);

		System.out.println(groupChannelDto);

		List<ArtistDto> artistUserDtoList = artistUserRepository.findByGroupDto_Id(
			groupChannelDto.getId());

		ArtistDto artistUserDto = null;

		for (ArtistDto artistUserInfo : artistUserDtoList) {
			if (artistUserInfo.getIsAdmin()) {
				artistUserDto = artistUserInfo;
				break;
			}
		}

		if (artistUserDto == null) {
			throw new Exception("artistUserDto"); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception("artistUserDto mail"); // 세세한 예외 처리 필요
		}

		return announcementRepository.save(announcementDto);
	}

	// 소속사 직원이 공지 제목 혹은 내용을 바꾸는 메서드
	public AnnouncementDto modifyAnnouncement(String groupName, int announcementId, String accessToken,
		AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = jwtService.extractEmail(accessToken).get();

		if (decodingEmail == null) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		GroupDto groupChannelDto = groupRepository.findByName(groupName);

		List<ArtistDto> artistUserDtoList = artistUserRepository.findByGroupDto_Id(
			groupChannelDto.getId());

		ArtistDto artistUserDto = null;

		for (ArtistDto artistUserInfo : artistUserDtoList) {
			if (artistUserInfo.getIsAdmin()) {
				artistUserDto = artistUserInfo;
				break;
			}
		}

		if (artistUserDto == null) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		AnnouncementDto modifyAnnouncementDto = announcementRepository.findById(announcementId);
		modifyAnnouncementDto.setTitle(announcementDto.getTitle());
		modifyAnnouncementDto.setContent(announcementDto.getContent());
		announcementRepository.save(modifyAnnouncementDto);

		return modifyAnnouncementDto;
	}

	// 소속사 직원이 공지를 지우는 메서드
	public void removeAnnouncement(String groupName, int announcementId, String accessToken) throws Exception {
		String decodingEmail = jwtService.extractEmail(accessToken).get();

		if (decodingEmail == null) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		GroupDto groupChannelDto = groupRepository.findByName(groupName);

		List<ArtistDto> artistUserDtoList = artistUserRepository.findByGroupDto_Id(
			groupChannelDto.getId());

		ArtistDto artistUserDto = null;

		for (ArtistDto artistUserInfo : artistUserDtoList) {
			if (artistUserInfo.getIsAdmin()) {
				artistUserDto = artistUserInfo;
				break;
			}
		}

		if (artistUserDto == null) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		announcementRepository.deleteById(announcementId);
	}
}
