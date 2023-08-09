package com.mk.ourola.api.feed.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;

public interface BookmarkService {
	public boolean getBookmark(Integer id, String accessToken) throws Exception;

	public boolean modifyBookmark(Integer id, String accessToken) throws Exception;

	public BookmarkDto writeBookmark(FanDto fanDto, FeedDto feedDto);

	List<BookmarkDto> getBookmarkList(String role, Integer userId);
}
