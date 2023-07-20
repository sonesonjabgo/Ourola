package com.mk.ourola.api.feed.service;

import java.util.List;

import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;

public interface CommentService {
	// 피드 댓글
	public List<CommentDto> getCommentList(int feedId);
	public CommentDto getComment(int commentId);
	public CommentDto writeComment(CommentDto commentDto);
	public void removeComment(int commentId);

	// 피드 대댓글
	public List<ReCommentDto> getReCommentList(int commentId);
	public ReCommentDto getReComment(int reCommentId);
	public ReCommentDto writeReComment(ReCommentDto reCommentDto);
	public void removereComment(int reCommentId);
}
