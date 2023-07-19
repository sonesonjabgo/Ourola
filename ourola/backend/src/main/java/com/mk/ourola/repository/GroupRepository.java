package com.mk.ourola.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.repository.dto.GroupChannelDto;

public interface GroupRepository extends JpaRepository<GroupChannelDto, Integer> {
	GroupChannelDto findByName(String name);
}
