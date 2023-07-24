package com.mk.ourola.api.user.service;

import java.util.List;

import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.user.repository.dto.FanUserSignUpDto;
import com.mk.ourola.api.user.repository.dto.NotificationDto;
import com.mk.ourola.api.user.repository.dto.SubscribeGroupDto;

public interface FanUserService {

	public void signUp(FanUserSignUpDto userSignUpDto) throws Exception;

	public List<NotificationDto> getNotification(String email);

	public List<SubscribeGroupDto> getSubscribeChannel(String userEmail);

	public String writeNotifications(FeedDto feedDto);
}
