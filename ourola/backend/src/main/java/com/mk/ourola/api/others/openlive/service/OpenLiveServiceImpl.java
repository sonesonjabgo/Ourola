package com.mk.ourola.api.others.openlive.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.naming.AuthenticationException;
import javax.naming.LimitExceededException;
import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.others.openlive.repository.OpenLiveParticipantRepository;
import com.mk.ourola.api.others.openlive.repository.OpenLiveRepository;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;
import com.mk.ourola.api.others.openlive.service.OpenLiveService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class OpenLiveServiceImpl implements OpenLiveService {

	private final OpenLiveRepository openLiveRepository;
	private final GroupRepository groupRepository;
	private final FanRepository fanRepository;
	private final OpenLiveParticipantRepository openLiveParticipantRepository;

	private final JwtService jwtService;
	private final FileServiceImpl fileService;

	@Override
	@Transactional()
	public Page<OpenLiveDto> getOpenLiveList(String group, Date currentTime, Pageable pageable) {
		GroupDto groupDto = groupRepository.findByName(group);

		return openLiveRepository.findByGroupDto_IdAndTicketingEndDateIsAfter(groupDto.getId(), currentTime, pageable);
	}

	@Override
	public OpenLiveDto getOpenLive(String artist, int id) {
		return openLiveRepository.findById(id);
	}

	@Override
	public boolean getOpenLiveParticipate(String header, int id) throws Exception {
		FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(header)).orElseThrow();
		return openLiveParticipantRepository.existsByFanDto_IdAndOpenLiveDto_Id(fanDto.getId(), id);
	}

	@Override
	public OpenLiveDto writeOpenLive(String group, String header, OpenLiveDto openLiveDto, MultipartFile file) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();

		System.out.println(openLiveDto);
		String role = jwtService.extractRole(accessToken).get();
		GroupDto groupDto = groupRepository.findByName(group);
		openLiveDto.setGroupDto(groupDto);
		if (role.equals("USER") || role.equals("ARTIST") || !groupDto.getName().equals(group)) {
			throw new AuthenticationException("관리자 권한입니다.");
		}
		String filePath = null;
		if(!(file == null)) {
			filePath = fileService.openLiveImgToPath(file);
		}
		openLiveDto.setFilePath(filePath);
		openLiveDto.setCurParticipant(0);
		return openLiveRepository.save(openLiveDto);
	}

	@Override
	public OpenLiveParticipantDto writeOpenLiveParticipate(String artist, String header, int id) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		FanDto fanDto = fanRepository.findByEmail(jwtService.extractEmail(accessToken).get()).get();
		OpenLiveDto openLiveDto = openLiveRepository.findById(id);

		if (openLiveDto.isFull())
			throw new LimitExceededException("인원 모집이 마감되었습니다.");

		Optional<OpenLiveParticipantDto> any = openLiveParticipantRepository.findByFanDto_IdAndOpenLiveDto_Id(
			fanDto.getId(), id);
		if (any.isPresent()) {
			throw new Exception("이미 신청한 항목입니다.");
		}

		OpenLiveParticipantDto openLiveParticipantDto = openLiveParticipantRepository.save(
			OpenLiveParticipantDto.builder()
				.fanDto(fanDto)
				.openLiveDto(openLiveDto)
				.build());

		openLiveDto.participate();

		return openLiveParticipantDto;
	}

	@Override
	public OpenLiveDto cancelOpenLiveParticipate(Integer userId, int id) {
		Integer deleteCnt = openLiveParticipantRepository.deleteByOpenLiveDto_IdAndFanDto_Id(
			id, userId);
		OpenLiveDto openLiveDto = openLiveRepository.findById(id);
		openLiveDto.cancel();
		return openLiveDto;
	}

	@Override
	public int getParticipateRank(Integer userId, int openLiveId) {
		int ranking = openLiveParticipantRepository.findByOpenLiveDto_IdAndFanDto_IdOverRank(
			userId, openLiveId);
		return ranking;
	}

}
