package com.mk.ourola.api.common.auth.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService implements UserDetailsService {
	private final FanRepository fanRepository;
	private final ArtistRepository artistRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		FanDto fanUser = fanRepository.findByEmail(email)
			.orElse(null);
		// .orElseThrow(() -> new UsernameNotFoundException("해당 이메일이 존재하지 않습니다."));
		ArtistDto artistUser = artistRepository.findByEmail(email)
			.orElse(null);
		if (fanUser == null && artistUser == null) {
			throw new UsernameNotFoundException("해당 이메일이 존재하지 않습니다.");
		} else if (fanUser != null && artistUser == null) {
			return User.builder()
				.username(fanUser.getEmail())
				.password(fanUser.getPassword())
				.roles(Role.USER.getKey())
				.build();
		} else {
			return org.springframework.security.core.userdetails.User.builder()
				.username(artistUser.getEmail())
				.password(artistUser.getPassword())
				.roles(Role.ARTIST.getKey())
				.build();
		}

	}
}
