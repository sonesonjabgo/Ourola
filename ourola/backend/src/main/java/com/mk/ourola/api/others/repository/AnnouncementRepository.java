package com.mk.ourola.api.others.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.others.repository.dto.AnnouncementDto;

@Repository
public interface AnnouncementRepository extends JpaRepository<AnnouncementDto, Integer> {
	// 채널 ID를 이용해서 해당 아티스트의 전체 공지사항을 가져오는 메서드
	List<AnnouncementDto> findByGroupChannelDto_IdOrderByCreateTimeDesc(int id);

	// 공지사항 id를 이용해서 해당 공지사항을 가져오는 메서드
	AnnouncementDto findById(int id);
}
