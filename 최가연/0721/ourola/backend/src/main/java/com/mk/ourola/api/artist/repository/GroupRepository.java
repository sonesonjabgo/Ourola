package com.mk.ourola.api.artist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

@Repository
public interface GroupRepository extends JpaRepository<GroupChannelDto, Integer> {
	GroupChannelDto findByName(String name);

	List<GroupChannelDto> findByNameContains(String name);
}
