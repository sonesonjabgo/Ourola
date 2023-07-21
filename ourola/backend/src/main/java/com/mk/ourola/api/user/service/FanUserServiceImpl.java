package com.mk.ourola.api.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.NotificationRepository;
import com.mk.ourola.api.user.repository.SubscribeGroupRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.FanUserSignUpDto;
import com.mk.ourola.api.user.repository.dto.NotificationDto;
import com.mk.ourola.api.user.repository.dto.Role;
import com.mk.ourola.api.user.repository.dto.SubscribeGroupDto;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FanUserServiceImpl implements FanUserService {

	private final FanUserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final NotificationRepository notificationRepository;
	private final SubscribeGroupRepository subscribeGroupRepository;

	public void signUp(FanUserSignUpDto userSignUpDto) throws Exception {

		if (userRepository.findByEmail(userSignUpDto.getEmail()).isPresent()) {
			throw new Exception("이미 존재하는 이메일입니다.");
		}

		FanUserDto user = FanUserDto.builder()
			.email(userSignUpDto.getEmail())
			.password(userSignUpDto.getPassword())
			.name(userSignUpDto.getName())
			.age(userSignUpDto.getAge())
			.tel(userSignUpDto.getTel())
			.role(Role.USER)
			.build();

		user.passwordEncode(passwordEncoder);
		userRepository.save(user);
	}

	public List<NotificationDto> getNotification(String email) {
		int loginUserId = userRepository.findByEmail(email).get().getId();
		return notificationRepository.findByFanUserDto_Id(loginUserId);
	}

	// 아티스트가 글을 쓴 경우 해당 태널을 구독한 유저들에게 보낼 알림을 저장함
	public String writeNotifications(FeedDto feedDto) {
		List<SubscribeGroupDto> byGroupChannelDtoId = subscribeGroupRepository.findByGroupChannelDto_Id(
			feedDto.getGroupChannelDto().getId());

		for (SubscribeGroupDto i : byGroupChannelDtoId) {
			i.getFanUserDto().getId();
			NotificationDto notificationDto = NotificationDto.builder()
				.fanUserDto(i.getFanUserDto())
				.groupChannelDto(feedDto.getGroupChannelDto())
				.feedDto(feedDto)
				.content(feedDto.getTitle())
				.build();
			notificationRepository.save(notificationDto);
		}
		return "등록 완료";
	}

	public List<SubscribeGroupDto> getSubscribeChannel(String userEmail) {
		Optional<FanUserDto> userDto = userRepository.findByEmail(userEmail);
		return subscribeGroupRepository.findByFanUserDto_Id(userDto.get().getId()).get();
	}
}
