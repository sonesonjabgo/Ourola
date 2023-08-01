package com.mk.ourola.api.feed.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.BookmarkDto;

@Repository
public interface BookmarkRepository extends JpaRepository<BookmarkDto, Integer> {
	List<BookmarkDto> findByFanDto_Id(Integer userId);

}
