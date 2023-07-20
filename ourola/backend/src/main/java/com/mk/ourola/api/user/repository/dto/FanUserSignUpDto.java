package com.mk.ourola.api.user.repository.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class FanUserSignUpDto {
    private String email;
    private String password;
    private String name;
    private int age;
    private String tel;
}
