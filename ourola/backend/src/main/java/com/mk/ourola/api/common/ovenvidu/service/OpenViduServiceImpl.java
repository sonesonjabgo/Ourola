package com.mk.ourola.api.common.ovenvidu.service;

import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.openvidu.java.client.Connection;
import io.openvidu.java.client.ConnectionProperties;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.SessionProperties;

@Service
// @RequiredArgsConstructor
public class OpenViduServiceImpl implements OpenViduService {

	@Value("${OPENVIDU_URL}")
	private String OPENVIDU_URL;

	@Value("${OPENVIDU_SECRET}")
	private String OPENVIDU_SECRET;

	private OpenVidu openvidu;

	@PostConstruct
	public void init() {
		this.openvidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
	}

	@Override
	public String initializeSession(Map<String, Object> params) throws Exception {
		SessionProperties properties = SessionProperties.fromJson(params).build();
		Session session = openvidu.createSession(properties);
		System.out.println(params);
		return session.getSessionId();
	}

	@Override
	public String createConnection(String sessionId, Map<String, Object> params) throws Exception {
		Session session = openvidu.getActiveSession(sessionId);
		if (session == null) {
			return null;
		}
		ConnectionProperties properties = ConnectionProperties.fromJson(params).build();
		Connection connection = session.createConnection(properties);
		return connection.getToken();
	}
}
