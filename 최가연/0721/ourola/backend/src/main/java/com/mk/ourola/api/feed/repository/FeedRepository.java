package com.mk.ourola.api.feed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.FeedDto;

@Repository
public interface FeedRepository extends JpaRepository<FeedDto, Integer> {

	List<FeedDto> findAll();

	FeedDto findById(int id);

	List<FeedDto> findByGroupChannelDto_Id(int id);

	List<FeedDto> findByArtistUserDto_Id(int id);
}
