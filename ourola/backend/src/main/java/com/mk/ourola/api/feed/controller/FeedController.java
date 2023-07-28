package com.mk.ourola.api.feed.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.common.file.service.FileServiceImpl;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;
import com.mk.ourola.api.feed.service.FeedServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/{group}/feed")
public class FeedController {

	// 팬 피드, 아티스트 포스트 컨트롤러

	private final FeedServiceImpl feedService;

	private final JwtService jwtService;

	private final FileServiceImpl fileService;

	// 해당 그룹의 모든 피드, 포스트를 불러오는 메서드
	@GetMapping("")
	public ResponseEntity<List<FeedDto>> getAllFeed(@PathVariable String group) {
		try {
			List<FeedDto> fanFeedList = feedService.getAllFeed(group);
			return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/fan")
	public ResponseEntity<List<FeedDto>> getAllFanFeed(@PathVariable String group) {
		try {
			List<FeedDto> fanFeedList = feedService.getAllFanFeed(group);
			return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/artist")
	public ResponseEntity<List<FeedDto>> getAllArtistFeed(@PathVariable String group) {
		try {
			List<FeedDto> fanFeedList = feedService.getAllArtistFeed(group);
			return new ResponseEntity<>(fanFeedList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 피드, 포스트를 작성하는 메서드
	@PostMapping("/write")
	public ResponseEntity<FeedDto> writeFeed(
		@PathVariable String group,
		@RequestParam List<MultipartFile> files,
		@RequestBody FeedDto FeedDto,
		@RequestHeader(name = "Authorization") String accessToken
	) {
		try {
			Optional<String> email = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get());
			FeedDto fanFeedDtoResult = feedService.writeFeed(group, FeedDto, email.get());
			if (!files.isEmpty()) {
				fileService.writeFeedImages(files, fanFeedDtoResult);
			}
			return new ResponseEntity<>(fanFeedDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 id의 피드, 포스트를 삭제하는 메서드
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<String> removeFeed(@PathVariable String group, @PathVariable Integer id) {
		try {
			feedService.removeFeed(id);
			return new ResponseEntity<>("삭제 성공", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 단일 피드, 포스트를 보는 메서드
	@GetMapping("/{id}")
	public ResponseEntity<FeedDto> getFeed(
		@PathVariable(name = "group") String group,
		@PathVariable(name = "id") int id
	) {
		try {
			FeedDto Feed = feedService.getFeed(group, id);
			return new ResponseEntity<>(Feed, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 id의 글을 수정하는 메서드
	@PostMapping("/modify/{id}")
	public ResponseEntity<FeedDto> modifyFeed(
		@PathVariable String group,
		@PathVariable int id,
		@RequestBody FeedDto FeedDto
	) {
		try {
			FeedDto.setId(id);
			FeedDto modifiedFeed = feedService.modifyFeed(FeedDto);
			return new ResponseEntity<>(modifiedFeed, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 사용자가 좋아요를 누르면 feed의 좋아요를 올리고 like 테이블에 추가
	// pathvariable id : feed id
	@PutMapping("/{id}/like")
	public ResponseEntity<?> modifyLike(@RequestHeader(name = "Authorization") String accessToken,
		@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			Boolean isLike = feedService.modifyLike(id, accessToken);
			return new ResponseEntity<>(isLike, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 사용자가 좋아요를 누른 피드 리스트 (피드 아이디 포함)
	@GetMapping("/like/list")
	public ResponseEntity<List<LikeDto>> getLikeList(@PathVariable("group") String group,
		@RequestHeader String accessToken) {
		System.out.println("아티스트 : " + group);
		try {
			List<LikeDto> likelist = feedService.getLikeList(accessToken);
			return new ResponseEntity<>(likelist, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 아티스트의 ID를 받아 그 아티스트의 게시물들만 보내는 메서드
	@GetMapping("/filter/{artistId}")
	public ResponseEntity<List<FeedDto>> getAllSpecificArtistFeed(@PathVariable String group,
		@PathVariable int artistId) {
		try {
			return new ResponseEntity<>(feedService.getAllSpecificArtistFeed(artistId), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
