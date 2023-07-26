package com.mk.ourola.api.user.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService implements UserDetailsService {
    private final FanUserRepository fanUserRepository;
    private final ArtistUserRepository artistUserRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        FanUserDto fanUser = fanUserRepository.findByEmail(email)
            .orElse(null);
                // .orElseThrow(() -> new UsernameNotFoundException("해당 이메일이 존재하지 않습니다."));
        ArtistUserDto artistUser = artistUserRepository.findByEmail(email)
            .orElse(null);
        if(fanUser == null && artistUser == null) {
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
