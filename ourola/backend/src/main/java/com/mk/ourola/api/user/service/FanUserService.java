package com.mk.ourola.api.user.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.FanUserSignUpDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FanUserService {

    private final FanUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void signUp(FanUserSignUpDto userSignUpDto) throws Exception {

        if (userRepository.findByEmail(userSignUpDto.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        FanUserDto user = FanUserDto.builder()
                .email(userSignUpDto.getEmail())
                .password(userSignUpDto.getPassword())
                .name(userSignUpDto.getName())
                .age(userSignUpDto.getAge())
                .tel(userSignUpDto.getTel())
//                .role(Role.USER)
                .build();

        user.passwordEncode(passwordEncoder);
        userRepository.save(user);
    }
}
