package com.mk.ourola.api.feed.service;

import java.util.List;

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
	public CommentDto getComment(int commentId) {
		return commentRepository.findById(commentId);
	}

	@Override
	public CommentDto writeComment(CommentDto commentDto) {
		return commentRepository.save(commentDto);
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
	public ReCommentDto getReComment(int reCommentId) {
		return reCommentRepository.findById(reCommentId);
	}

	@Override
	public ReCommentDto writeReComment(ReCommentDto reCommentDto) {
		return reCommentRepository.save(reCommentDto);
	}

	@Override
	public void removereComment(int reCommentId) {
		reCommentRepository.deleteById(reCommentId);
	}
}
