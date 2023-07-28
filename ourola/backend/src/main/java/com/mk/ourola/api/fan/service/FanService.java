package com.mk.ourola.api.fan.service;

import java.util.List;

import com.mk.ourola.api.fan.repository.dto.FanSignUpDto;
import com.mk.ourola.api.fan.repository.dto.NotificationDto;
import com.mk.ourola.api.fan.repository.dto.SubscribeGroupDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

public interface FanService {

	public void signUp(FanSignUpDto fanSignUpDto) throws Exception;

	public List<NotificationDto> getNotification(String email);

	public List<SubscribeGroupDto> getSubscribeGroup(int userId);

	public List<GroupDto> getNotSubscribeGroup(String userEmail);

	public String writeNotifications(FeedDto feedDto);
}
