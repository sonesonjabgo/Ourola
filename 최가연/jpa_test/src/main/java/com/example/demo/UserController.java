package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/userList")
    public ResponseEntity<?> getAllUsers() {
        List<UserDto> user = userService.findAll();
        return new ResponseEntity<List<UserDto>>(user, HttpStatus.OK);
//        System.out.println(user);
//        return ResponseEntity.ok(user);
    }
}
