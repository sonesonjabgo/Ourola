package com.mk.ourola.api.user.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.ArtistUserSignUpDto;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.user.repository.dto.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArtistUserServiceImpl implements ArtistUserService {

	private final ArtistUserRepository artistUserRepository;
	private final GroupRepository groupRepository;
	private final PasswordEncoder passwordEncoder;

	@Override
	public List<ArtistUserDto> getGroupArtistList(String groupName) {
		System.out.println("그룹 멤버 목록 조회중 : " + groupName);
		GroupChannelDto groupDto = groupRepository.findByName(groupName);
		System.out.println(groupDto);
		return artistUserRepository.findByGroupChannelDto_IdAndIsAdminIsFalse(groupDto.getId());
	}

	@Override
	public void signUp(ArtistUserSignUpDto artistUserSignUpDto) throws Exception {
		if (artistUserRepository.findByEmail(artistUserSignUpDto.getEmail()).isPresent()) {
			throw new Exception("이미 존재하는 이메일입니다.");
		}

		ArtistUserDto user = ArtistUserDto.builder()
			.groupChannelDto(groupRepository.findById(artistUserSignUpDto.getGroupId()).get())
			.email(artistUserSignUpDto.getEmail())
			.password(artistUserSignUpDto.getPassword())
			.name(artistUserSignUpDto.getName())
			.age(artistUserSignUpDto.getAge())
			.tel(artistUserSignUpDto.getTel())
			.role(Role.ARTIST)
			.build();

		user.passwordEncode(passwordEncoder);
		artistUserRepository.save(user);
	}
}
