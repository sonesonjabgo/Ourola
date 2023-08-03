package com.mk.ourola.api.others.openlive;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpenLiveRepository extends JpaRepository<OpenLiveDto, Integer> {
	List<OpenLiveDto> findByGroupDto_Id(int id);

	OpenLiveDto findById(int id);
}
