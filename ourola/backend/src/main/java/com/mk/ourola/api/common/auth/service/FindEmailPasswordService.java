package com.mk.ourola.api.common.auth.service;

import com.mk.ourola.api.common.auth.repository.FindEmailDto;

public interface FindEmailPasswordService {
	public String findEmail(FindEmailDto findEmailDto) throws Exception;


}
