package com.mk.ourola.api.fan.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mk.ourola.api.admin.UserListDto;
import com.mk.ourola.api.common.auth.repository.SocialType;
import com.mk.ourola.api.fan.repository.dto.FanDto;

public interface FanRepository extends JpaRepository<FanDto, Integer> {
	Optional<FanDto> findByEmail(String email);

	Optional<FanDto> findByName(String name);

	boolean existsByEmail(String email);

	Optional<FanDto> findByRefreshToken(String refreshToken);

	Optional<FanDto> findByNameAndBirthdayAndTel(String name, Date birthday, String tel);

	boolean existsByNickname(String nickname);

	Optional<FanDto> findBySocialTypeAndSocialId(SocialType socialType, String socialId);

	@Query(value = "SELECT * FROM fan_user as f WHERE id IN (SELECT user_id FROM group_subscribe g WHERE g.group_id = ?)",
		nativeQuery = true)
	List<FanDto> findFanDtoBySubscribeChannel(int groupId);

	@Query(value = "SELECT f.id, f.role, f.email, f.name, f.nickname FROM fan_user f UNION SELECT a.id, a.role, a.email, a.name, a.nickname FROM artist_user a;",
		nativeQuery = true)
	List<UserListDto> getAllUserList();


	@Query(value = "SELECT * FROM fan_user f WHERE f.id <> ? and f.nickname = ?", nativeQuery = true)
	List<FanDto> checkNicknameDuplicate(int fanId, String nickname);

}
