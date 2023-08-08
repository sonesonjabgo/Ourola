package com.mk.ourola.api.group.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.group.repository.dto.GroupDto;

@Repository
public interface GroupRepository extends JpaRepository<GroupDto, Integer> {
	GroupDto findByName(String name);

	List<GroupDto> findByNameContains(String name);

	// @Query("SELECT c FROM group_channel c LEFT JOIN (select gs from group_subscribe gs where user_id= :fanUserId) s on s.group_id = c.id WHERE s.group_id IS NULL;")
	// @Query("SELECT s FROM group_subscribe s RIGHT JOIN s.groupChannelDto c WHERE c.id IS NULL AND s.fanUserDto.id = :id")
	@Query(value = "SELECT c.id, c.name, c.file_path, c.file_extension FROM (select * from group_subscribe gs where gs.user_id= ?) s RIGHT JOIN group_channel c on s.group_id = c.id WHERE s.group_id IS NULL",
		nativeQuery = true)
	Optional<List<GroupDto>> findAllWithNoRelatedSubscribeGroup(int fanUserId);
}
