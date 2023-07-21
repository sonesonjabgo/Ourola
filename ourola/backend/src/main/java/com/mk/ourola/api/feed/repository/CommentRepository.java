package com.mk.ourola.api.feed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.CommentDto;

@Repository
public interface CommentRepository extends JpaRepository<CommentDto, Integer> {

	// 피드 아이디로 댓글 리스트 조회
	List<CommentDto> findByFeedDto_Id(int id);

	// 사용자 아이디로 댓글 리스트 조회
	List<CommentDto> findByFanUserDto_Id(int id);

	List<CommentDto> findByArtistUserDto_Id(int id);

	CommentDto findById(int id);


}
