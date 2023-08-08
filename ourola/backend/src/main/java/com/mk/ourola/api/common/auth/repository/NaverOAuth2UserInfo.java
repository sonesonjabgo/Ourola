package com.mk.ourola.api.common.auth.repository;

import java.util.Map;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class NaverOAuth2UserInfo extends OAuth2UserInfo {
	public NaverOAuth2UserInfo(Map<String, Object> attributes) {
		super(attributes);
	}

	@Override
	public String getId() {
		Map<String, Object> response = (Map<String, Object>) attributes.get("response");

		if (response == null) {
			return null;
		}
		return (String) response.get("id");
	}

	@Override
	public String getNickname() {
		log.info("naver user info getNickname() :: "+attributes.toString());
		Map<String, Object> response = (Map<String, Object>) attributes.get("response");

		if (response == null) {
			return null;
		}

		return (String) response.get("name");
	}

	@Override
	public String getImageUrl() {
		Map<String, Object> response = (Map<String, Object>) attributes.get("response");

		if (response == null) {
			return null;
		}

		return (String) response.get("profile_image");
	}
}
