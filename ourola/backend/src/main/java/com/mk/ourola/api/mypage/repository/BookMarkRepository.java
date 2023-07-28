package com.mk.ourola.api.mypage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.mypage.repository.dto.BookMarkDto;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMarkDto, Integer> {

	List<BookMarkDto> findByFanDto_Id(int userId);
}
