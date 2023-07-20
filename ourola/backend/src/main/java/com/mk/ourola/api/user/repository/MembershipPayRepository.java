package com.mk.ourola.api.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mk.ourola.api.user.repository.dto.MembershipPayDto;

@Repository
public interface MembershipPayRepository extends JpaRepository<MembershipPayDto, Integer> {

	List<MembershipPayDto> findAll();
}
