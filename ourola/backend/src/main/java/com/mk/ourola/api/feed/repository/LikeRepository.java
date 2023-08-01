package com.mk.ourola.api.feed.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.feed.repository.dto.LikeDto;

public interface LikeRepository extends JpaRepository<LikeDto, Integer> {

	int countAllByFeedDto_Id(int id);

	Optional<LikeDto> findByFanDto_IdAndFeedDto_Id(int fanId, int feedId);
	// LikeDto findByFanUserDto_Id(int fanUserId);

	Optional<LikeDto> findByArtistDto_IdAndFeedDto_Id(int artistId, int feedId);

	LikeDto findByFanDto_IdAndFanDto_Id(int fanId, int feedId);

	List<LikeDto> findByFanDto_Id(int fanId);

	boolean existsByFeedDto_IdAndFanDto_Id(int feedId, int fanId);
	boolean existsByFeedDto_IdAndArtistDto_Id(int feedId, int artistId);

	void deleteById(int id);
}
