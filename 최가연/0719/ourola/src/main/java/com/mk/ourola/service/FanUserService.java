package com.mk.ourola.service;

import com.mk.ourola.repository.FanUserRepository;
import com.mk.ourola.repository.dto.FanUserDto;
import com.mk.ourola.repository.dto.FanUserSignUpDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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
