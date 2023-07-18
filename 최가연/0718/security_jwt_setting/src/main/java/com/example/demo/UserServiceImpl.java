package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    PasswordEncoder passwordEncoder;

    @Override
    public List<UserEntity> findAll() {
        List<UserEntity> users = new ArrayList<>();
        userRepository.findAll().forEach(e -> users.add(e));
        return users;
    }

    @Override
    public void signUp(UserSignUpDto userSignUpDto) throws Exception {

        // email 중복 체크
        if(userRepository.findByEmail(userSignUpDto.getEmail()).isPresent()) {
            throw new Exception("이미 존재하는 이메일입니다.");
        }

        UserEntity user = UserEntity.builder()
                .email(userSignUpDto.getEmail())
                .name(userSignUpDto.getName())
                .password(userSignUpDto.getPassword())
                .age(userSignUpDto.getAge())
                .build();

        user.passwordEncode(passwordEncoder);
        userRepository.save(user);
    }
}
