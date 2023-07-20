package com.mk.ourola.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.repository.dto.FanUserSignUpDto;
import com.mk.ourola.service.FanUserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FanUserController {
    private final FanUserService fanUserService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> fanSignUp(@RequestBody FanUserSignUpDto fanUserSignUpDto) throws Exception {
        fanUserService.signUp(fanUserSignUpDto);
        return new ResponseEntity<String>("회원가입 성공", HttpStatus.OK);
    }


}
