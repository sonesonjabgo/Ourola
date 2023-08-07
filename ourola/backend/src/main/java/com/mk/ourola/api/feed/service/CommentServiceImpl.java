package com.mk.ourola.api.feed.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.feed.repository.CommentRepository;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.ReCommentRepository;
import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class CommentServiceImpl implements CommentService {

	private final CommentRepository commentRepository;

	private final ReCommentRepository reCommentRepository;

	private final FeedRepository feedRepository;

	private final JwtService jwtService;

	private final FanRepository fanRepository;

	private final ArtistRepository artistRepository;

	@Override
	public List<CommentDto> getCommentList(int feedId) {
		return commentRepository.findByFeedDto_IdOrderByCreateDateDesc(feedId);
	}

	@Override
	public List<CommentDto> getUserCommnetList(int fanUserId) {
		return commentRepository.findByFanDto_Id(fanUserId);
	}

	@Override
	public List<CommentDto> getArtistCommentList(int artistUserId) {
		return commentRepository.findByArtistDto_Id(artistUserId);
	}

	@Override
	public CommentDto getComment(int commentId) {
		return commentRepository.findById(commentId);
	}

	@Override
	public CommentDto writeComment(String header, CommentDto commentDto) {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		String role = jwtService.extractRole(accessToken).get();
		int id = jwtService.accessTokenToUserId(header);
		if(role.equals(Role.USER.getKey()) || role.equals(Role.ADMIN.getKey()) || role.equals(Role.GUEST.getKey())) {
			commentDto.setFanDto(fanRepository.findById(id).get());
		} else {
			commentDto.setArtistDto(artistRepository.findById(id).get());
		}
		// System.out.println("commentDto: "+commentDto);
		CommentDto newComment = commentRepository.save(commentDto);
		FeedDto feedDto = feedRepository.findById(newComment.getFeedDto().getId());
		feedDto.setCommentCount(feedDto.getCommentCount() + 1);
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
		feedDto.setCommentCount(feedDto.getCommentCount() - 1);
		commentRepository.deleteById(commentId);
		feedRepository.save(feedDto);
	}

	@Override
	public List<ReCommentDto> getReCommentList(int commentId) {
		return reCommentRepository.findByCommentDto_Id(commentId);
	}

	@Override
	public List<ReCommentDto> getUserReCommnetList(int fanUserId) {
		return reCommentRepository.findByFanDto_Id(fanUserId);
	}

	@Override
	public List<ReCommentDto> getArtistReCommentList(int artistUserId) {
		return reCommentRepository.findByArtistDto_Id(artistUserId);
	}

	@Override
	public ReCommentDto getReComment(int reCommentId) {
		return reCommentRepository.findById(reCommentId);
	}

	@Override
	public ReCommentDto writeReComment(String header, ReCommentDto reCommentDto) {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		String role = jwtService.extractRole(accessToken).get();
		int id = jwtService.accessTokenToUserId(header);
		if(role.equals(Role.USER.getKey()) || role.equals(Role.ADMIN.getKey()) || role.equals(Role.GUEST.getKey())) {
			reCommentDto.setFanDto(fanRepository.findById(id).get());
		} else {
			reCommentDto.setArtistDto(artistRepository.findById(id).get());
		}
		ReCommentDto reComment = reCommentRepository.save(reCommentDto);
		CommentDto commentDto = commentRepository.findById(reComment.getCommentDto().getId());
		commentDto.setReCommentCount(commentDto.getReCommentCount() + 1);
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
		commentDto.setReCommentCount(commentDto.getReCommentCount() - 1);
		reCommentRepository.deleteById(reCommentId);
		commentRepository.save(commentDto);
	}
}
