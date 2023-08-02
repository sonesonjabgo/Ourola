package com.mk.ourola.api.common.file.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mk.ourola.api.common.file.repository.dto.ShopFileDto;

public interface ShopFileRepository extends JpaRepository<ShopFileDto, Integer> {
}
