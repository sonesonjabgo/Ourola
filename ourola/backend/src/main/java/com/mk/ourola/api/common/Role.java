package com.mk.ourola.api.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
	GUEST("GUEST"), USER("USER"), ARTIST("ARTIST"),
	ADMIN("ADMIN"), CHANNEL_ADMIN("CHANNEL_ADMIN");
	private final String key;
}
