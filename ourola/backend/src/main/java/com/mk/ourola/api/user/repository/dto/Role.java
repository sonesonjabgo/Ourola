package com.mk.ourola.api.user.repository.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
	GUEST("ROLE_GUEST"), USER("ROLE_USER"), ARTIST("ROLE_ARTIST");
	private final String key;
}
