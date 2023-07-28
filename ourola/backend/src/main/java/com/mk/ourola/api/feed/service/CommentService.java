package com.mk.ourola.api.feed.service;

import java.util.List;

import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;

public interface CommentService {
	// 피드 댓글
	public List<CommentDto> getCommentList(int feedId);
	public List<CommentDto> getUserCommnetList(int fanUserId);
	public List<CommentDto> getArtistCommentList(int artistUserId);
	public CommentDto getComment(int commentId);
	public CommentDto writeComment(String accessToken, CommentDto commentDto);
	public CommentDto modifyComment(String accessToken, CommentDto commentDto);
	public void removeComment(String accessToken, int commentId);

	// 피드 대댓글
	public List<ReCommentDto> getReCommentList(int commentId);
	public List<ReCommentDto> getUserReCommnetList(int fanUserId);
	public List<ReCommentDto> getArtistReCommentList(int artistUserId);
	public ReCommentDto getReComment(int reCommentId);
	public ReCommentDto writeReComment(String accessToken, ReCommentDto reCommentDto);
	public ReCommentDto modifyReComment(String accessToken, ReCommentDto reCommentDto);
	public void removeReComment(String accessToken, int reCommentId);
}
