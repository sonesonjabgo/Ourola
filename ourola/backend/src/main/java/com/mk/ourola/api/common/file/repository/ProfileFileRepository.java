package com.mk.ourola.api.common.file.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.ProfileFileDto;

@Repository
public interface ProfileFileRepository extends JpaRepository<ProfileFileDto, Integer> {

}
