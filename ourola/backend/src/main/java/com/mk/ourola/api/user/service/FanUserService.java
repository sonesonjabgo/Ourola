package com.mk.ourola.api.user.service;

import java.util.List;

import com.mk.ourola.api.user.repository.dto.FanUserSignUpDto;
import com.mk.ourola.api.user.repository.dto.NotificationDto;

public interface FanUserService {

	public void signUp(FanUserSignUpDto userSignUpDto) throws Exception;

	public List<NotificationDto> getNotification(String email);
}
