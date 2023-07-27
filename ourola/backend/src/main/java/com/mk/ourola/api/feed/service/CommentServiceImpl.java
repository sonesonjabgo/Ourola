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
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.ReCommentRepository;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;
import com.mk.ourola.api.user.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentServiceImpl implements CommentService {

	private final CommentRepository commentRepository;

	private final ReCommentRepository reCommentRepository;

	private final FeedRepository feedRepository;

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
	public CommentDto writeComment(String accessToken, CommentDto commentDto) {
		CommentDto newComment = commentRepository.save(commentDto);
		FeedDto feedDto = feedRepository.findById(newComment.getFeedDto().getId());
		feedDto.setCommentCount(feedDto.getCommentCount()+1);
		feedRepository.save(feedDto);
		return newComment;
	}

	@Override
	public CommentDto modifyComment(String accessToken, CommentDto commentDto) {
		CommentDto newComment = commentRepository.findById(commentDto.getId());
		newComment.setContent(commentDto.getContent());
		return commentRepository.save(newComment);
	}

	@Override
	public void removeComment(String accessToken, int commentId) {
		CommentDto comment = commentRepository.findById(commentId);
		FeedDto feedDto = feedRepository.findById(comment.getFeedDto().getId());
		feedDto.setCommentCount(feedDto.getCommentCount()-1);
		commentRepository.deleteById(commentId);
		feedRepository.save(feedDto);
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
	public ReCommentDto writeReComment(String accessToken, ReCommentDto reCommentDto) {
		ReCommentDto reComment = reCommentRepository.save(reCommentDto);
		CommentDto commentDto = commentRepository.findById(reComment.getCommentDto().getId());
		commentDto.setReCommentCount(commentDto.getReCommentCount()+1);
		commentRepository.save(commentDto);
		return reComment;
	}

	@Override
	public ReCommentDto modifyReComment(String accessToken, ReCommentDto reCommentDto) {
		ReCommentDto newReComment = reCommentRepository.findById(reCommentDto.getId());
		newReComment.setContent(reCommentDto.getContent());
		return reCommentRepository.save(newReComment);
	}

	@Override
	public void removeReComment(String accessToken, int reCommentId) {
		ReCommentDto reComment = reCommentRepository.findById(reCommentId);
		CommentDto commentDto = commentRepository.findById(reComment.getCommentDto().getId());
		commentDto.setReCommentCount(commentDto.getReCommentCount()-1);
		reCommentRepository.deleteById(reCommentId);
		commentRepository.save(commentDto);
	}
}
