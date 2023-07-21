package com.mk.ourola.api.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.BookMarkDto;

@Repository
public interface BookMarkRepository extends JpaRepository<BookMarkDto, Integer> {

	List<BookMarkDto> findByFanUserDto_Id(int userId);
}
