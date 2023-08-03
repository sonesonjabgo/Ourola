package com.mk.ourola.api.artist.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.artist.repository.dto.ArtistSignUpDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.group.repository.GroupRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArtistServiceImpl implements ArtistService {

	private final ArtistRepository artistRepository;
	private final GroupRepository groupRepository;
	private final PasswordEncoder passwordEncoder;

	@Override
	public void signUp(ArtistSignUpDto artistSignUpDto) throws Exception {
		if (artistRepository.findByEmail(artistSignUpDto.getEmail()).isPresent()) {
			throw new Exception("이미 존재하는 이메일입니다.");
		}

		System.out.println(artistSignUpDto);

		ArtistDto user = ArtistDto.builder()
			.groupDto(groupRepository.findById(artistSignUpDto.getGroupId()).get())
			.email(artistSignUpDto.getEmail())
			.password(artistSignUpDto.getPassword())
			.name(artistSignUpDto.getName())
			.age(artistSignUpDto.getAge())
			.tel(artistSignUpDto.getTel())
			.role(Role.ARTIST)
			.build();

		user.passwordEncode(passwordEncoder);
		artistRepository.save(user);
	}
}
