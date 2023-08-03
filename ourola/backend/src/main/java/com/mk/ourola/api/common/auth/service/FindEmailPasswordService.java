package com.mk.ourola.api.common.auth.service;

import com.mk.ourola.api.common.auth.repository.FindEmailDto;

public interface FindEmailPasswordService {
	public String findEmail(FindEmailDto findEmailDto) throws Exception;

	public void findPassword(String email) throws Exception;

	public boolean verifyToken(String token) throws Exception;

	public void modifyPassword(String token, String newPassword) throws Exception;
}
