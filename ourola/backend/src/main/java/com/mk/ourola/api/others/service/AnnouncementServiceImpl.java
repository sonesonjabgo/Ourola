package com.mk.ourola.api.others.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.others.repository.AnnouncementRepository;
import com.mk.ourola.api.others.repository.dto.AnnouncementDto;
import com.mk.ourola.api.user.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementServiceImpl implements Announcement {
	private final AnnouncementRepository announcementRepository;
	private final GroupRepository groupRepository;
	private final ArtistUserRepository artistUserRepository;
	private final JwtService jwtService;

	// 게시판 첫 접속 시 전체 공지 정보를 보내는 메서드
	public List<AnnouncementDto> getAllAnnouncement(String artist) throws Exception {
		GroupChannelDto groupChannelDto = groupRepository.findByName(artist);

		return announcementRepository.findByGroupChannelDto_Id(groupChannelDto.getId());
	}

	// 선택된 하나의 공지의 정보를 보내는 메서드
	public AnnouncementDto getAnnouncement(String artist, int announcementId) throws Exception {
		return announcementRepository.findById(announcementId);
	}

	// 소속사 직원이 공지를 만드는 메서드
	public AnnouncementDto writeAnnouncement(String artist, String accessToken, AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = jwtService.extractEmail(accessToken).get();

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (decodingEmail != null && !artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		return announcementRepository.save(announcementDto);
	}

	// 소속사 직원이 공지 제목 혹은 내용을 바꾸는 메서드
	public AnnouncementDto modifyAnnouncement(String artist, int announcementId, String accessToken,
		AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = jwtService.extractEmail(accessToken).get();

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (decodingEmail != null && !artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		AnnouncementDto modifyAnnouncementDto = announcementRepository.findById(announcementId);
		modifyAnnouncementDto.setTitle(announcementDto.getTitle());
		modifyAnnouncementDto.setContent(announcementDto.getContent());
		announcementRepository.save(modifyAnnouncementDto); // 이러면 수정된다는 거지?

		return modifyAnnouncementDto;
	}

	// 소속사 직원이 공지를 지우는 메서드
	public void removeAnnouncement(String artist, int announcementId, String accessToken) throws Exception {
		String decodingEmail = jwtService.extractEmail(accessToken).get();

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (decodingEmail != null && !artistUserDto.getEmail().equals(decodingEmail)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		announcementRepository.deleteById(announcementId);
	}
}
