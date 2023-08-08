package com.mk.ourola.api.others.openlive;

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
	public OpenLiveDto writeOpenLive(String group, String header, OpenLiveDto openLiveDto) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();

		System.out.println(openLiveDto);
		String role = jwtService.extractRole(accessToken).get();
		GroupDto groupDto = groupRepository.findByName(group);
		openLiveDto.setGroupDto(groupDto);
		if (role.equals("USER") || role.equals("ARTIST") || !groupDto.getName().equals(group)) {
			throw new AuthenticationException("관리자 권한입니다.");
		}
		openLiveDto.setCurParticipant(0);
		return openLiveRepository.save(openLiveDto);
	}

	@Override
	public OpenLiveParticipantDto writeOpenLiveParticipate(String artist, String header, int id) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		FanDto fanDto = fanRepository.findByEmail(jwtService.extractEmail(accessToken).get()).get();
		OpenLiveDto openLiveDto = openLiveRepository.findById(id);

		if (openLiveDto.isFull())
			throw new Exception("인원 모집이 마감되었습니다.");

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
	public Integer cancelOpenLiveParticipate(Integer userId, int id) {
		Integer deleteCnt = openLiveParticipantRepository.deleteByOpenLiveDto_IdAndFanDto_Id(
			id, userId);
		OpenLiveDto openLiveDto = openLiveRepository.findById(id);
		openLiveDto.cancel();
		return deleteCnt;
	}

	@Override
	public int getParticipateRank(Integer userId, int openLiveId) {
		int ranking = openLiveParticipantRepository.findByOpenLiveDto_IdAndFanDto_IdOverRank(
			userId, openLiveId);
		return ranking;
	}

}
