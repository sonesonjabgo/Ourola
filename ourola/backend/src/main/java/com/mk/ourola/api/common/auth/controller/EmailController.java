package com.mk.ourola.api.common.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.common.auth.service.EmailSenderService;
import com.mk.ourola.api.common.auth.service.EmailService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/email")
public class EmailController {
	private final EmailService emailService;

	// @GetMapping("/confirm")
	// public ResponseEntity<?> confirmEmail(@RequestParam String token) {
	// 	try {
	// 		Boolean result = emailService.verifyEmail(token);
	// 		return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
	// 	} catch (Exception e) {
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }

}
