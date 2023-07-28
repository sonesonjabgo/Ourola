package com.mk.ourola.api.fan.repository.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class FanSignUpDto {
	private String email;
	private String password;
	private String name;
	private Integer age;
	private String tel;
}
