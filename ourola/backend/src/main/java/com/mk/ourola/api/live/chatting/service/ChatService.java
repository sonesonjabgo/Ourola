package com.mk.ourola.api.live.chatting.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mk.ourola.api.live.chatting.repository.dto.ChatRoom;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
@Service
public class ChatService {
	private final ObjectMapper mapper;
	private Map<String, ChatRoom> chatRooms;

	@PostConstruct
	private void init() {
		chatRooms = new LinkedHashMap<>();
	}

	public List<ChatRoom> findAllRoom() {
		return new ArrayList<>(chatRooms.values());
	}

	public ChatRoom findOrCreateRoomByName(String name) {
		log.info("findOrCreateRoomByName : {}", chatRooms.toString());
		if (chatRooms.containsKey(name)) {
			System.out.println(name);
			ChatRoom room = chatRooms.get(name);
			log.info("has room : {}", room.toString());

			return room;
		} else {
			return createRoom(name);
		}
	}

	private ChatRoom createRoom(String name) {

		//Builder를 사용하여 ChatRoom 을 Build
		ChatRoom room = new ChatRoom(name);

		chatRooms.put(name, room);//랜덤 아이디와 room 정보를 Map 에 저장

		log.info("created room : {}", chatRooms.toString());
		return room;
	}

	public <T> void sendMessage(WebSocketSession session, T message) {
		try {
			session.sendMessage(new TextMessage(mapper.writeValueAsString(message)));
			;
		} catch (IOException e) {
			log.error(e.getMessage(), e);
		}
	}

}