package com.mk.ourola.api.feed.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.format.annotation.DateTimeFormat;
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
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.fan.service.FanServiceImpl;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;
import com.mk.ourola.api.feed.service.BookmarkService;
import com.mk.ourola.api.feed.service.BookmarkServiceImpl;
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

	private final BookmarkServiceImpl bookmarkService;

	private final FanServiceImpl fanService;


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
			List<FeedDto> artistFeedList = feedService.getAllArtistFeed(group);
			return new ResponseEntity<>(artistFeedList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 피드, 포스트를 작성하는 메서드
	@PostMapping("/write")
	public ResponseEntity<FeedDto> writeFeed(
		@PathVariable String group,
		@RequestParam(required = false) List<MultipartFile> files,
		FeedDto feedDto,
		@RequestHeader(name = "Authorization") String accessToken
	) {
		try {
			System.out.println(feedDto);
			Optional<String> email = jwtService.extractEmail(jwtService.headerStringToAccessToken(accessToken).get());
			FeedDto fanFeedDtoResult = feedService.writeFeed(group, feedDto, email.get());
			System.out.println(files);
			if (!(files == null)) {
				fileService.writeFeedImages(files, fanFeedDtoResult);
			}
			return new ResponseEntity<>(fanFeedDtoResult, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 id의 피드, 포스트를 삭제하는 메서드
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<String> removeFeed(@PathVariable String group, @PathVariable Integer id) {
		try {
			String fileRemoveResult = fileService.removeFeedImage(id);
			System.out.println(fileRemoveResult);
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
		@RequestParam List<MultipartFile> files,
		FeedDto FeedDto
	) {
		try {
			fileService.removeFeedImage(id);
			FeedDto.setId(id);
			FeedDto modifiedFeed = feedService.modifyFeed(FeedDto);
			fileService.writeFeedImages(files, modifiedFeed);
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
		@RequestHeader("Authorization") String accessToken) {
		// System.out.println("아티스트 : " + group);
		try {
			List<LikeDto> likelist = feedService.getLikeList(accessToken);
			return new ResponseEntity<>(likelist, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 피드와 사용자의 좋아요 여부
	@GetMapping("/{id}/like")
	public ResponseEntity<?> getLike(@RequestHeader(name = "Authorization") String accessToken,
		@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			Boolean isLike = feedService.getLike(id, accessToken);
			return new ResponseEntity<>(isLike, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
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

	// 시작 날짜, 끝 날자를 받아 그 아티스트의 게시물들만 보내는 메서드
	@GetMapping("/filter/date")
	public ResponseEntity<List<FeedDto>> getSpecificDateFeed(@PathVariable("group") String group, @RequestParam(value = "startDate") @DateTimeFormat(pattern = "yyyyMMdd") Date startDate,
		@RequestParam(value = "endDate") @DateTimeFormat(pattern = "yyyyMMdd") Date endDate, @RequestParam Integer type) {
		try {
			return new ResponseEntity<>(feedService.getSpecificDateFeed(group, startDate, endDate, type), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	// 해당 피드와 사용자의 북마크 여부
	// id는 feedid
	@GetMapping("{id}/bookmark")
	public ResponseEntity<?> getBookmark(@RequestHeader(name = "Authorization") String accessToken,
		@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			Boolean isBookmark = bookmarkService.getBookmark(id, accessToken);
			return new ResponseEntity<>(isBookmark, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 해당 피드의 북마크를 토글하는 함수
	// id는 feedid
	@PutMapping("{id}/bookmark")
	public ResponseEntity<?> modifyBookmark(@RequestHeader(name = "Authorization") String accessToken,
		@PathVariable("group") String group, @PathVariable("id") int id) {
		try {
			Boolean isBookmark = bookmarkService.modifyBookmark(id, accessToken);
			return new ResponseEntity<>(isBookmark, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// @GetMapping("/getBookmarkList")
	// public ResponseEntity<?> getBookmarkList(@RequestHeader(name = "Authorization") String accessToken) {
	// 	try {
	// 		Optional<String> role = jwtService.extractRole(accessToken);
	// 		Integer userId = jwtService.accessTokenToUserId(accessToken);
	// 		List<BookmarkDto> bookmarkList = bookmarkService.getBookmarkList(role.get(), userId);
	// 		return new ResponseEntity<>(bookmarkList, HttpStatus.OK);
	// 	} catch (Exception e) {
	// 		System.out.println(e.getMessage());
	// 		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	// 	}
	// }
}
