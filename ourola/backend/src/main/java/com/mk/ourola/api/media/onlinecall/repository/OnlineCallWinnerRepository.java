package com.mk.ourola.api.media.onlinecall.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.media.onlinecall.repository.dto.OnlineCallWinner;

@Repository
public interface OnlineCallWinnerRepository extends JpaRepository<OnlineCallWinner, Integer> {
	OnlineCallWinner findByFanDto_IdAndOnlineCallDto_Id(Integer userId, Integer callId);

}
