package com.mk.ourola.api.fan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.NotificationRepository;
import com.mk.ourola.api.fan.repository.SubscribeGroupRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.repository.dto.FanSignUpDto;
import com.mk.ourola.api.fan.repository.dto.NotificationDto;
import com.mk.ourola.api.fan.repository.dto.SubscribeGroupDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.sun.jdi.request.DuplicateRequestException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FanServiceImpl implements FanService {

	private final FanRepository fanRepository;
	private final PasswordEncoder passwordEncoder;
	private final NotificationRepository notificationRepository;
	private final SubscribeGroupRepository subscribeGroupRepository;
	private final GroupRepository groupRepository;
	private final JwtService jwtService;

	public void signUp(FanSignUpDto fanSignUpDto) throws Exception {

		if (fanRepository.findByEmail(fanSignUpDto.getEmail()).isPresent()) {
			throw new Exception("이미 존재하는 이메일입니다.");
		}

		FanDto user = FanDto.builder()
			.email(fanSignUpDto.getEmail())
			.password(fanSignUpDto.getPassword())
			.name(fanSignUpDto.getName())
			.age(fanSignUpDto.getAge())
			.tel(fanSignUpDto.getTel())
			.birthday(fanSignUpDto.getBirthday())
			.nickname(fanSignUpDto.getNickname())
			.role(Role.USER)
			.build();

		user.passwordEncode(passwordEncoder);
		fanRepository.save(user);
	}

	public boolean emailDuplicateCheck(String email) throws Exception {
		System.out.println("email: "+email);
		return fanRepository.existsByEmail(email);
	}

	public List<NotificationDto> getNotification(String email) {
		int loginUserId = fanRepository.findByEmail(email).get().getId();
		return notificationRepository.findByFanDto_Id(loginUserId);
	}

	@Override
	public SubscribeGroupDto writeSubscribeGroup(String accessToken, String group) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		FanDto fanDto = fanRepository.findByEmail(email).get();
		GroupDto groupDto = groupRepository.findByName(group);
		if(subscribeGroupRepository.existsByFanDto_IdAndGroupDto_Id(fanDto.getId(), groupDto.getId())) {
			throw new DuplicateRequestException("이미 구독중인 채널입니다.");
		}
		SubscribeGroupDto subscribeGroupDto = SubscribeGroupDto.builder()
			.fanDto(fanDto)
			.groupDto(groupDto)
			.build();
		return subscribeGroupRepository.save(subscribeGroupDto);
	}

	@Override
	public int removeSubscribeGroup(String accessToken, String group, String nickname) throws Exception {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		FanDto fanDto = fanRepository.findByEmail(email).get();
		GroupDto groupDto = groupRepository.findByName(group);
		if(!subscribeGroupRepository.existsByFanDto_IdAndGroupDto_Id(fanDto.getId(), groupDto.getId())) {
			throw new Exception("구독중이지 않은 그룹입니다.");
		}

		return subscribeGroupRepository.deleteByFanDto_IdAndGroupDto_Id(fanDto.getId(), groupDto.getId());
	}

	@Override
	public SubscribeGroupDto checkSubscribeGroup(String accessToken, String group, String nickname) {
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		FanDto fanDto = fanRepository.findByEmail(email).get();
		GroupDto groupDto = groupRepository.findByName(group);
		return subscribeGroupRepository.findByFanDto_IdAndGroupDto_Id(fanDto.getId(), groupDto.getId());
	}

	// public boolean nicknameDuplicateCheck(String group, String nickname) throws Exception {
	// 	GroupDto groupDto = groupRepository.findByName(group);
	// 	return subscribeGroupRepository.existsByGroupDto_IdAndNickname(groupDto.getId(), nickname);
	// }

	public boolean nicknameDuplicateCheck(String nickname) throws Exception {
		return fanRepository.existsByNickname(nickname);
	}

	// 아티스트가 글을 쓴 경우 해당 태널을 구독한 유저들에게 보낼 알림을 저장함
	public String writeNotifications(FeedDto feedDto) {
		List<SubscribeGroupDto> byGroupChannelDtoId = subscribeGroupRepository.findByGroupDto_Id(
			feedDto.getGroupDto().getId());

		for (SubscribeGroupDto i : byGroupChannelDtoId) {
			i.getFanDto().getId();
			NotificationDto notificationDto = NotificationDto.builder()
				.fanDto(i.getFanDto())
				.groupDto(feedDto.getGroupDto())
				.feedDto(feedDto)
				.content(feedDto.getTitle())
				.build();
			notificationRepository.save(notificationDto);
		}
		return "등록 완료";
	}

	public List<SubscribeGroupDto> getSubscribeGroup(int userId) {
		Optional<FanDto> userDto = fanRepository.findById(userId);
		return subscribeGroupRepository.findByFanDto_Id(userDto.get().getId()).orElse(null);
	}

	public List<GroupDto> getNotSubscribeGroup(String userEmail) {
		Optional<FanDto> userDto = fanRepository.findByEmail(userEmail);
		System.out.println(userDto);

		return groupRepository.findAllWithNoRelatedSubscribeGroup(userDto.get().getId()).orElse(null);
	}

	//id를 기준으로 fan유저 정보를 가져오는 것
	public FanDto getFanInfo(int fanId){
		Optional<FanDto> byId = fanRepository.findById(fanId);
		return byId.get();
	}


}
