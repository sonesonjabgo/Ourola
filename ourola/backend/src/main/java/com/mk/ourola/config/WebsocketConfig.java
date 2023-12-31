package com.mk.ourola.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.mk.ourola.api.live.chatting.handler.ChatHandler;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@EnableWebSocket
@Configuration
@RequiredArgsConstructor
public class WebsocketConfig implements WebSocketConfigurer {

	// WebSocketHandler 에 관한 생성자 추가
	private final ChatHandler chatHandler;

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		// endpoint 설정 : /ws/chat
		// 이를 통해서 ws://localhost:8080/ws/chat 으로 요청이 들어오면 websocket 통신을 진행합니다.
		registry.addHandler(chatHandler, "ws/chat").setAllowedOrigins("*");
	}
}
