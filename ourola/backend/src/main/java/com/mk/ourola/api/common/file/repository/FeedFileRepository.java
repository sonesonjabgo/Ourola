package com.mk.ourola.api.common.file.repository;

import org.springframework.stereotype.Repository;

import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

@Repository
public interface FeedFileRepository {
	public ProfileFileDto save(FeedFileDto feedFileDto);
}
