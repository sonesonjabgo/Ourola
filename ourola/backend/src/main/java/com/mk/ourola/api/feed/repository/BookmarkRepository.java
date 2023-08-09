package com.mk.ourola.api.feed.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;

@Repository
public interface BookmarkRepository extends JpaRepository<BookmarkDto, Integer> {
	List<BookmarkDto> findByFanDto_Id(Integer userId);

	List<BookmarkDto> findByArtistDto_Id(Integer artistId);

	boolean existsByFeedDto_IdAndFanDto_Id(int feedId, int fanId);
	boolean existsByFeedDto_IdAndArtistDto_Id(int feedId, int artistId);

	Optional<BookmarkDto> findByFanDto_IdAndFeedDto_Id(int fanId, int feedId);
	Optional<BookmarkDto> findByArtistDto_IdAndFeedDto_Id(int artistId, int feedId);

	void deleteById(int id);
}
