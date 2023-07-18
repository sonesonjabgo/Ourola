package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    // 전체 회원 조회
    @GetMapping("/user-list")
    public ResponseEntity<?> getAllUsers() {
        List<UserEntity> user = userService.findAll();
        return new ResponseEntity<List<UserEntity>>(user, HttpStatus.OK);
//        System.out.println(user);
//        return ResponseEntity.ok(user);
    }

    // 회원가입
    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody UserSignUpDto userSignUpDto) throws Exception {
        userService.signUp(userSignUpDto);
        return new ResponseEntity<String>("회원가입 성공", HttpStatus.OK);
    }


}
