package com.mk.ourola.api.user.repository.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class FanUserSignUpDto {
	private String email;
	private String password;
	private String name;
	private Integer age;
	private String tel;
}
