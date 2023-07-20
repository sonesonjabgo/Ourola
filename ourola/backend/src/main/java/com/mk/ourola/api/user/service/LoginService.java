package com.mk.ourola.api.user.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService implements UserDetailsService {
    private final FanUserRepository fanUserRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        FanUserDto user = fanUserRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("해당 이메일이 존재하지 않습니다."));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles("user")
                .build();
    }
}
