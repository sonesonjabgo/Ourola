package com.mk.ourola.api.feed.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.feed.repository.dto.FeedDto;

@Repository
public interface FeedRepository extends JpaRepository<FeedDto, Integer> {

	List<FeedDto> findAll();

	FeedDto findById(int id);

	List<FeedDto> findByGroupDto_Id(int id);

	List<FeedDto> findByGroupDto_IdAndTypeIsOrderByCreateDateDesc(int id, int type);

	List<FeedDto> findByArtistDto_IdOrderByCreateDateDesc(int id);

	List<FeedDto> findByGroupDto_IdAndTypeIsAndCreateDateBetweenOrderByCreateDateDesc(int id, int type, Date startDate, Date endDate);

	List<FeedDto> findByFanDto_Id(int userId);

	List<FeedDto> findByArtistDto_Id(int userId);

}
