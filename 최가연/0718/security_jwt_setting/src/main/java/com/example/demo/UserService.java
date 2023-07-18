package com.example.demo;

import java.util.List;

public interface UserService {
    // 전체 회원 목록
    public List<UserEntity> findAll();

    // 회원 가입
    public void signUp(UserSignUpDto userSignUpDto) throws Exception;
}
