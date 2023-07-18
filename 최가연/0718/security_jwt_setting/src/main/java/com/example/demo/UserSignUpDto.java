package com.example.demo;

import lombok.Getter;
import lombok.NoArgsConstructor;

// 자체 로그인 형식
@NoArgsConstructor
@Getter
public class UserSignUpDto {
    private String email;
    private String name;
    private String password;
    private int age;
}
