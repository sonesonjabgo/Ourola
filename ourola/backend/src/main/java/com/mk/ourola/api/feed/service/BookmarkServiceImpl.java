package com.mk.ourola.api.feed.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.BookmarkRepository;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookmarkServiceImpl implements BookmarkService{

	private final BookmarkRepository bookmarkRepository;

	public BookmarkDto writeBookmark(FanDto fanDto, FeedDto feedDto){
		BookmarkDto buildedBookmarkDto = BookmarkDto.builder()
			.feedDto(feedDto)
			.fanDto(fanDto)
			.build();
		BookmarkDto saved = bookmarkRepository.save(buildedBookmarkDto);
		return saved;
	}

	@Override
	public List<BookmarkDto> getBookmarkList(Integer userId) {
		List<BookmarkDto> bookmarkDtoList = bookmarkRepository.findByFanDto_Id(userId);
		return bookmarkDtoList;
	}
}
