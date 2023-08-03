package com.mk.ourola.api.live.ovenvidu.service;

import java.util.Map;

public interface OpenViduService {
	String initializeSession(Map<String, Object> params) throws Exception;

	String createConnection(String sessionid, Map<String, Object> params) throws Exception;
}
