package com.mk.ourola.api.feed.service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.feed.repository.CommentRepository;
import com.mk.ourola.api.feed.repository.ReCommentRepository;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

	private final CommentRepository commentRepository;

	private final ReCommentRepository reCommentRepository;

	@Override
	public List<CommentDto> getCommentList(int feedId) {
		return commentRepository.findByFeedDto_Id(feedId);
	}

	@Override
	public List<CommentDto> getUserCommnetList(int fanUserId) {
		return commentRepository.findByFanUserDto_Id(fanUserId);
	}

	@Override
	public List<CommentDto> getArtistCommentList(int artistUserId) {
		return commentRepository.findByArtistUserDto_Id(artistUserId);
	}

	@Override
	public CommentDto getComment(int commentId) {
		return commentRepository.findById(commentId);
	}

	@Override
	public CommentDto writeComment(CommentDto commentDto) {
		System.out.println(commentDto);
		return commentRepository.save(commentDto);
	}

	@Override
	public CommentDto modifyComment(CommentDto commentDto) {
		CommentDto newComment = commentRepository.findById(commentDto.getId());
		newComment.setContent(commentDto.getContent());
		return commentRepository.save(newComment);
	}

	@Override
	public void removeComment(int commentId) {
		commentRepository.deleteById(commentId);
	}

	@Override
	public List<ReCommentDto> getReCommentList(int commentId) {
		return reCommentRepository.findByCommentDto_Id(commentId);
	}

	@Override
	public List<ReCommentDto> getUserReCommnetList(int fanUserId) {
		return reCommentRepository.findByFanUserDto_Id(fanUserId);
	}

	@Override
	public List<ReCommentDto> getArtistReCommentList(int artistUserId) {
		return reCommentRepository.findByArtistUserDto_Id(artistUserId);
	}

	@Override
	public ReCommentDto getReComment(int reCommentId) {
		return reCommentRepository.findById(reCommentId);
	}

	@Override
	public ReCommentDto writeReComment(ReCommentDto reCommentDto) {
		return reCommentRepository.save(reCommentDto);
	}

	@Override
	public ReCommentDto modifyReComment(ReCommentDto reCommentDto) {
		ReCommentDto newReComment = reCommentRepository.findById(reCommentDto.getId());
		newReComment.setContent(reCommentDto.getContent());
		return reCommentRepository.save(newReComment);
	}

	@Override
	public void removeReComment(int reCommentId) {
		reCommentRepository.deleteById(reCommentId);
	}
}
