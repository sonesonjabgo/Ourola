package com.mk.ourola.api.feed.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.feed.repository.dto.LikeDto;

public interface LikeRepository extends JpaRepository<LikeDto, Integer> {

	int countAllByFeedDto_Id(int id);

	Optional<LikeDto> findByFanUserDto_IdAndFeedDto_Id(int userId, int feedId);
	// LikeDto findByFanUserDto_Id(int fanUserId);

	Optional<LikeDto> findByArtistUserDto_IdAndFeedDto_Id(int artistId, int feedId);

	LikeDto findByFanUserDto_IdAndFanUserDto_Id(int fanUserId, int feedId);

	List<LikeDto> findByFanUserDto_Id(int userId);

	void deleteById(int id);
}
