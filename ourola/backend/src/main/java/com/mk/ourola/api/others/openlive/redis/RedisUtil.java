package com.mk.ourola.api.others.openlive.redis;

import java.util.concurrent.TimeUnit;

import org.redisson.api.RLock;
import org.redisson.api.RedissonClient;
import org.springframework.stereotype.Component;

import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveParticipantDto;
import com.mk.ourola.api.others.openlive.service.OpenLiveServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class RedisUtil {

	private final RedissonClient redissonClient;
	private final OpenLiveServiceImpl openLiveService;

	public OpenLiveParticipantDto saveLock(String artist, String header, int id) throws Exception {

		RLock rLock = redissonClient.getLock("공개방송 신청");
		try {
			boolean success = rLock.tryLock(5000, 1000, TimeUnit.MILLISECONDS);
			if (!success) {
				log.info("락 획득 실패");
				throw new IllegalArgumentException();
			}
			return openLiveService.writeOpenLiveParticipate(artist, header, id);
		} finally {
			rLock.unlock();
		}
	}
}