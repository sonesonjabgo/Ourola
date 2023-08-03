package com.mk.ourola.api.artist.repository.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
public class ArtistSignUpDto {
	private Integer groupId;
	private String email;
	private String password;
	private String name;
	private Integer age;
	private String tel;
}
