package com.mk.ourola.api.feed.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.service.CommentServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{artist}/{feed}/comment")
public class CommentController {
	private final CommentServiceImpl commentService;

	@GetMapping("")
	public ResponseEntity<?> getCommentList(@PathVariable String artist) {
		try {
			List<CommentDto> commentList = commentService.getCommentList()
		}
	}

}
