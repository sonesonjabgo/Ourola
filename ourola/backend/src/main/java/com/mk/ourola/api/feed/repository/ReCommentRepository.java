package com.mk.ourola.api.feed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.ReCommentDto;

@Repository
public interface ReCommentRepository extends JpaRepository<ReCommentDto, Integer> {

	List<ReCommentDto> findByCommentDto_Id(int id);

	ReCommentDto findById(int id);

	List<ReCommentDto> findByArtistUserDto_Id(int id);

	List<ReCommentDto> findByFanUserDto_Id(int id);
}
