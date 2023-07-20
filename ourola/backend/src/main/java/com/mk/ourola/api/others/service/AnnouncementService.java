package com.mk.ourola.api.others.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.others.repository.AnnouncementRepository;
import com.mk.ourola.api.others.repository.dto.AnnouncementDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnnouncementService {

	private final AnnouncementRepository announcementRepository;
	private final GroupRepository groupRepository;
	private final ArtistUserRepository artistUserRepository;

	public List<AnnouncementDto> getAllAnnouncement(String artist) throws Exception {
		GroupChannelDto groupChannelDto = groupRepository.findByName(artist);
		return announcementRepository.findByGroupChannelDto_Id(groupChannelDto.getId());
	}

	public AnnouncementDto getAnnouncement(String artist, int announcementId) throws Exception {
		return announcementRepository.findById(announcementId);
	}

	public AnnouncementDto writeAnnouncement(String artist, String accessToken, AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = accessToken; // accessToken이 없으므로 디코딩 필요

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (artistUserDto.getEmail() != decodingEmail) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		return announcementRepository.save(announcementDto);
	}

	public void modifyAnnouncement(String artist, int announcementId, String accessToken,
		AnnouncementDto announcementDto) throws
		Exception {
		String decodingEmail = accessToken; // accessToken이 없으므로 디코딩 필요

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (artistUserDto.getEmail() != decodingEmail) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		// 수정 코드 추가하기
	}

	public void removeAnnouncement(String artist, int announcementId, String accessToken) throws Exception {
		String decodingEmail = accessToken; // accessToken이 없으므로 디코딩 필요

		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (artistUserDto.getEmail() != decodingEmail) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		if (!artistUserDto.isAdmin()) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		announcementRepository.deleteById(announcementId);
	}
}
