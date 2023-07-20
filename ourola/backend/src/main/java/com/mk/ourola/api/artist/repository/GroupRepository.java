package com.mk.ourola.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.repository.dto.GroupChannelDto;

@Repository
public interface GroupRepository extends JpaRepository<GroupChannelDto, Integer> {
	GroupChannelDto findByName(String name);
}
