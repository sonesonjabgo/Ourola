package com.mk.ourola.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.repository.dto.BookMarkDto;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMarkDto, Integer> {

	List<BookMarkDto> findByUserId(int userId);
}
