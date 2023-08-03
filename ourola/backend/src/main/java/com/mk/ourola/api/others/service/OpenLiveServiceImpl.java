package com.mk.ourola.api.others.service;

import java.util.List;
import java.util.Optional;

import javax.naming.AuthenticationException;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.others.repository.OpenLiveParticipantRepository;
import com.mk.ourola.api.others.repository.OpenLiveRepository;
import com.mk.ourola.api.others.repository.dto.OpenLiveDto;
import com.mk.ourola.api.others.repository.dto.OpenLiveParticipantDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class OpenLiveServiceImpl implements OpenLiveService{

	private final OpenLiveRepository openLiveRepository;
	private final GroupRepository groupRepository;
	private final FanRepository fanRepository;
	private final OpenLiveParticipantRepository openLiveParticipantRepository;

	private final JwtService jwtService;
	@Override
	public List<OpenLiveDto> getOpenLiveList(String artist) {
		GroupDto groupDto = groupRepository.findByName(artist);
		return openLiveRepository.findByGroupDto_Id(groupDto.getId());
	}

	@Override
	public OpenLiveDto getOpenLive(String artist, int id) {
		return openLiveRepository.findById(id);
	}

	@Override
	public OpenLiveDto writeOpenLive(String artist, String header, OpenLiveDto openLiveDto) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();

		System.out.println(openLiveDto);
		String role = jwtService.extractRole(accessToken).get();
		if(role.equals("USER") || role.equals("ARTIST")){
			throw new AuthenticationException("관리자 권한입니다.");
		}
		GroupDto groupDto = groupRepository.findByName(artist);
		openLiveDto.setGroupDto(groupDto);
		openLiveDto.setCurParticipant(0);
		return openLiveRepository.save(openLiveDto);
	}

	@Override
	public OpenLiveParticipantDto writeOpenLiveParticipant(String artist, String accessToken, int id) throws Exception {
		FanDto fanDto = fanRepository.findByEmail(jwtService.extractEmail(accessToken).get()).get();
		OpenLiveDto openLiveDto = openLiveRepository.findById(id);

		if(openLiveDto.isFull())	throw new Exception("인원 모집이 마감되었습니다.");

		Optional<OpenLiveParticipantDto> any = openLiveParticipantRepository.findByFanDto_IdAndOpenLiveDto_Id(fanDto.getId(), id);
		if(any.isPresent()){
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

}
