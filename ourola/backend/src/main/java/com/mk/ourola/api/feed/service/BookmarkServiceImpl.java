package com.mk.ourola.api.feed.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.BookmarkRepository;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookmarkServiceImpl implements BookmarkService{

	private final JwtService jwtService;

	private final FeedRepository feedRepository;

	private final FanRepository fanRepository;

	private final ArtistRepository artistRepository;

	private final BookmarkRepository bookmarkRepository;

	@Override
	public boolean getBookmark(Integer id, String header) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		String role = jwtService.extractRole(accessToken).get();
		int user_id = jwtService.accessTokenToUserId(header);
		if (role.equals(Role.USER.getKey()) || role.equals(Role.ADMIN.getKey())) {
			return bookmarkRepository.existsByFeedDto_IdAndFanDto_Id(id, user_id);
		} else {
			return bookmarkRepository.existsByFeedDto_IdAndArtistDto_Id(id, user_id);
		}
	}

	// TODO: 아티스트 유저도 북마크 기능 추가해야 함
	@Override
	public boolean modifyBookmark(Integer id, String accessToken) throws Exception {
		FeedDto feedDto = feedRepository.findById(id).get();
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();

		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		boolean isBookmark;    // 바뀐 북마크 상태

		if (role.equals(Role.USER.getKey())) {
			FanDto fanDto = fanRepository.findByEmail(email).get();
			BookmarkDto bookmarkDto = bookmarkRepository.findByFanDto_IdAndFeedDto_Id(fanDto.getId(), feedDto.getId())
				.orElse(null);

			if (bookmarkDto != null) {   // 이미 북마크 되어있을 때
				bookmarkRepository.deleteById(bookmarkDto.getId());    // Bookmark 테이블에서 해당 행 삭제
				isBookmark = false;
			} else {  // 해당 피드가 북마크 안되어 있을 때
				BookmarkDto newBookmarkDto = BookmarkDto.builder()
					.feedDto(feedDto)
					.fanDto(fanDto)
					.artistDto(null)
					.build();
				bookmarkRepository.save(newBookmarkDto);    // Bookmark 테이블에 추가
				isBookmark = true;
			}
		} else {
			ArtistDto artistUserDto = artistRepository.findByEmail(email).get();
			BookmarkDto bookmarkDto = bookmarkRepository.findByArtistDto_IdAndFeedDto_Id(artistUserDto.getId(), feedDto.getId())
				.orElse(null);

			if (bookmarkDto != null) {                    // 이미 북마크 되어있을 때
				bookmarkRepository.deleteById(bookmarkDto.getId());    // Bookmark 테이블에서 해당 행 삭제
				isBookmark = false;
			} else {   // 해당 피드가 북마크 안되어 있을 때
				BookmarkDto newBookmarkDto = BookmarkDto.builder()
					.feedDto(feedDto)
					.fanDto(null)
					.artistDto(artistUserDto)
					.build();
				bookmarkRepository.save(newBookmarkDto);    // Bookmark 테이블에 추가
				isBookmark = true;
			}
		}
		// 바뀐 북마크 상태
		return isBookmark;
	}

	public BookmarkDto writeBookmark(FanDto fanDto, FeedDto feedDto){
		BookmarkDto buildedBookmarkDto = BookmarkDto.builder()
			.feedDto(feedDto)
			.fanDto(fanDto)
			.build();
		BookmarkDto saved = bookmarkRepository.save(buildedBookmarkDto);
		return saved;
	}

	@Override
	public List<BookmarkDto> getBookmarkList(String role, Integer userId) {
		if (role.equals(Role.USER.getKey()) || role.equals(Role.GUEST.getKey()) || role.equals(Role.ADMIN.getKey())) {
			return bookmarkRepository.findByFanDto_Id(userId);
		} else {
			return bookmarkRepository.findByArtistDto_Id(userId);
		}
	}
}
