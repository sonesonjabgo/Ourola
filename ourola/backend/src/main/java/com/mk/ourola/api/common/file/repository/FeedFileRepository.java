package com.mk.ourola.api.common.file.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

@Repository
public interface FeedFileRepository extends JpaRepository<ProfileFileDto, Integer> {
	public ProfileFileDto save(FeedFileDto feedFileDto);
}
