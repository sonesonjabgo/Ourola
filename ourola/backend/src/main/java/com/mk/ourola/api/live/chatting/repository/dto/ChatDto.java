package com.mk.ourola.api.live.chatting.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatDto {

	//메시지 타입 :  입장 채팅
	public enum MessageType {
		ENTER, TALK, HEARTBEAT
	}

	private MessageType type; //메시지 타입
	private String roomName;// 방 번호
	private String sender;//채팅을 보낸 사람
	private String message;// 메세지
	private String time; // 채팅 발송 시간
	private boolean boldNick;

}