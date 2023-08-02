package com.mk.ourola.api.feed.service;

import java.util.List;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.dto.BookmarkDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;

public interface BookmarkService {

	public BookmarkDto writeBookmark(FanDto fanDto, FeedDto feedDto);

	List<BookmarkDto> getBookmarkList(Integer userId);
}
