package com.mk.ourola.api.live.chatting.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.live.chatting.repository.dto.ChatRoom;
import com.mk.ourola.api.live.chatting.service.ChatService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {
	private final ChatService chatService;

	@GetMapping
	public List<ChatRoom> findAllRooms() {
		return chatService.findAllRoom();
	}
}
