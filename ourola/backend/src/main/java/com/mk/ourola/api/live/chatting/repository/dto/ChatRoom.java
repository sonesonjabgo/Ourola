package com.mk.ourola.api.live.chatting.repository.dto;

import java.util.HashSet;
import java.util.Set;

import org.springframework.web.socket.WebSocketSession;

import com.mk.ourola.api.live.chatting.service.ChatService;

import lombok.Data;

@Data
public class ChatRoom {

	private String name;//채팅방 이름
	private Set<WebSocketSession> sessions = new HashSet<>();

	public ChatRoom(String name) {
		this.name = name;
	}

	public void handleAction(WebSocketSession session, ChatDto message, ChatService service) {
		System.out.println("session" + session.toString());

		//message 에 담긴 타입을 확인한다.
		//이때 message 에서 getType 으로 가져온 내용이
		//chatDto 의 열거형인 MessageType 안에 있는 ENTER 과 동일한 값이라면
		if (message.getType().equals(ChatDto.MessageType.ENTER)) {
			//sessions 에 넘어온 session 을 담고,
			synchronized (sessions) {
				if (!sessions.contains(session)) {
					sessions.add(session);
				}
			}
			//message 에는 입장하였다는 메시지를 띄워줍니다.
			message.setMessage(message.getSender() + " 님이 입장하였습니다.");
			sendMessage(message, service);
		} else if (message.getType().equals(ChatDto.MessageType.TALK)) {
			System.out.println("메세지 출력 요청");
			message.setMessage(message.getMessage());
			sendMessage(message, service);
		}
	}

	public <T> void sendMessage(T message, ChatService service) {
		synchronized (sessions) {
			sessions.forEach(session -> {
				try {
					if (session.isOpen()) {
						service.sendMessage(session, message);
					}
				} catch (Exception e) {
					// 예외 발생 시 로그 출력
					e.printStackTrace();
				}
			});
		}
	}
}