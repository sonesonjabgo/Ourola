package com.mk.ourola.api.feed.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mk.ourola.api.feed.repository.dto.CommentDto;
import com.mk.ourola.api.feed.repository.dto.ReCommentDto;
import com.mk.ourola.api.feed.service.CommentServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{feed}/comment")
public class CommentController {

	private final CommentServiceImpl commentService;

	// 조회한 피드(포스트)의 댓글을 모두 조회하는 메서드
	// 테스트 완료
	@GetMapping("")
	public ResponseEntity<List<CommentDto>> getCommentList(@PathVariable int feed) {
		try {
			List<CommentDto> commentList = commentService.getCommentList(feed);
			return new ResponseEntity<>(commentList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자별 댓글 리스트 조회
	// 테스트 완료
	@GetMapping("/fan-user/{fanUserId}")
	public ResponseEntity<?> getUserComment(@PathVariable int fanUserId) {
		try {
			List<CommentDto> commentList = commentService.getUserCommnetList(fanUserId);
			return new ResponseEntity<>(commentList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 단일 댓글 조회
	// 테스트 완료
	@GetMapping("/{commentId}")
	public ResponseEntity<?> getComment(@PathVariable int commentId) {
		try {
			CommentDto comment = commentService.getComment(commentId);
			return new ResponseEntity<>(comment, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 피드(포스트)에 댓글 작성
	// 테스트 완료
	@PostMapping("")
	public ResponseEntity<CommentDto> writeComment(@PathVariable int feed, @RequestBody CommentDto commentDto) {
		try {
			CommentDto commentDtoResult = commentService.writeComment(commentDto);
			return new ResponseEntity<>(commentDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 댓글 수정
	// 테스트 완료
	@PutMapping("")
	public ResponseEntity<?> modifyComment(@PathVariable int feed, @RequestBody CommentDto commentDto) {
		try {
			CommentDto commentDtoResult = commentService.modifyComment(commentDto);
			return new ResponseEntity<>(commentDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 댓글 삭제
	// 테스트 완료
	@DeleteMapping("/{commentId}")
	public ResponseEntity<?> removeComment(@PathVariable int commentId) {
		try {
			commentService.removeComment(commentId);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 조회한 댓글의 모든 대댓글 리스트 조회
	// 테스트 완료
	@GetMapping("recomment-list/{commentId}")
	public ResponseEntity<?> getReCommentList(@PathVariable int commentId) {
		try {
			List<ReCommentDto> reCommentList = commentService.getReCommentList(commentId);
			return new ResponseEntity<>(reCommentList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 사용자별 작성한 대댓글 리스트 조회
	// 테스트 완료
	@GetMapping("recomment/fan-user/{fanUserId}")
	public ResponseEntity<?> getUserReCommentList(@PathVariable int fanUserId) {
		try {
			List<ReCommentDto> reCommentList = commentService.getUserReCommnetList(fanUserId);
			return new ResponseEntity<>(reCommentList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 단일 대댓글 조회
	// 테스트 완료
	@GetMapping("/recomment/{reCommentId}")
	public ResponseEntity<?> getReComment(@PathVariable int reCommentId) {
		try {
			ReCommentDto reComment = commentService.getReComment(reCommentId);
			return new ResponseEntity<>(reComment, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 대댓글 작성
	// 테스트 완료
	@PostMapping("/recomment")
	public ResponseEntity<?> writeReComment(@RequestBody ReCommentDto reCommentDto) {
		try {
			ReCommentDto reCommentDtoResult = commentService.writeReComment(reCommentDto);
			return new ResponseEntity<>(reCommentDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 대댓글 수정
	// 테스트 완료
	@PutMapping("/recomment")
	public ResponseEntity<?> modifyReComment(@RequestBody ReCommentDto reCommentDto) {
		try {
			ReCommentDto reComment = commentService.modifyReComment(reCommentDto);
			return new ResponseEntity<>(reComment, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 대댓글 삭제
	// 테스트 완료
	@DeleteMapping("/recomment/{reCommentId}")
	public ResponseEntity<?> removeReComment(@PathVariable int reCommentId) {
		try {
			commentService.removeReComment(reCommentId);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


}
