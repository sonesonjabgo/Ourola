package com.mk.ourola.api.feed.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.criteria.CriteriaBuilder;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.Role;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.BookmarkRepository;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.LikeRepository;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FeedServiceImpl implements FeedService {

	private final FeedRepository feedRepository;

	private final GroupRepository groupRepository;

	private final ArtistRepository artistRepository;

	private final LikeRepository likeRepository;

	private final FanRepository fanRepository;

	private final BookmarkRepository bookmarkRepository;

	private final JwtService jwtService;

	public List<FeedDto> getAllFeed(String group) {
		int groupId = groupRepository.findByName(group).getId();
		return feedRepository.findByGroupDto_Id(groupId);
	}

	public List<FeedDto> getAllFanFeed(String group) {
		int groupId = groupRepository.findByName(group).getId();
		return feedRepository.findByGroupDto_IdAndTypeIsOrderByCreateDateDesc(groupId, 1);
	}

	public List<FeedDto> getAllArtistFeed(String group) {
		int groupId = groupRepository.findByName(group).getId();
		return feedRepository.findByGroupDto_IdAndTypeIsOrderByCreateDateDesc(groupId, 2);
	}

	public FeedDto getFeed(String artist, int id) {
		System.out.println(artist + "서비스");
		return feedRepository.findById(id);
	}

	public FeedDto writeFeed(String artist, FeedDto feedDto, String email) {
		Optional<FanDto> userDto = fanRepository.findByEmail(email);
		Optional<ArtistDto> artistDto = artistRepository.findByEmail(email);
		GroupDto group = groupRepository.findByName(artist);
		if (userDto.isPresent()) {
			feedDto.setFanDto(userDto.get());
		} else if (artistDto.isPresent()) {
			feedDto.setArtistDto(artistDto.get());
		}
		feedDto.setGroupDto(group);
		return feedRepository.save(feedDto);
	}

	public void removeFeed(Integer id) {
		feedRepository.deleteById(id);
	}

	public FeedDto modifyFeed(FeedDto FeedDto) {
		return feedRepository.save(FeedDto);
	}

	// TODO: 아티스트 유저도 좋아요 기능 추가해야 함
	public boolean modifyLike(Integer id, String accessToken) throws Exception {
		FeedDto feedDto = feedRepository.findById(id).get();
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();

		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		boolean isLike;    // 바뀐 좋아요 상태

		if (role.equals(Role.USER.getKey())) {
			FanDto fanDto = fanRepository.findByEmail(email).get();
			LikeDto likeDto = likeRepository.findByFanDto_IdAndFeedDto_Id(fanDto.getId(), feedDto.getId())
				.orElse(null);

			if (likeDto != null) {                    // 이미 좋아요 되어있을 때
				likeRepository.deleteById(likeDto.getLikeId());    // like 테이블에서 해당 행 삭제
				feedDto.setLike(feedDto.getLike() - 1);
				feedRepository.save(feedDto);
				isLike = false;
			} else {                                // 해당 피드가 좋아요 안되어 있을 때
				LikeDto newLikeDto = LikeDto.builder()
					.feedDto(feedDto)
					.fanDto(fanDto)
					.artistDto(null)
					.build();
				likeRepository.save(newLikeDto);    // like 테이블에 추가
				// 피드에
				feedDto.setLike(feedDto.getLike() + 1);
				feedRepository.save(feedDto);
				isLike = true;
			}
		} else {
			ArtistDto artistUserDto = artistRepository.findByEmail(email).get();
			LikeDto likeDto = likeRepository.findByArtistDto_IdAndFeedDto_Id(artistUserDto.getId(), feedDto.getId())
				.orElse(null);

			if (likeDto != null) {                    // 이미 좋아요 되어있을 때
				likeRepository.deleteById(likeDto.getLikeId());    // like 테이블에서 해당 행 삭제
				feedDto.setLike(feedDto.getLike() - 1);
				feedRepository.save(feedDto);
				isLike = false;
			} else {                                // 해당 피드가 좋아요 안되어 있을 때
				LikeDto newLikeDto = LikeDto.builder()
					.feedDto(feedDto)
					.fanDto(null)
					.artistDto(artistUserDto)
					.build();
				likeRepository.save(newLikeDto);    // like 테이블에 추가
				// 피드에
				feedDto.setLike(feedDto.getLike() + 1);
				feedRepository.save(feedDto);
				isLike = true;
			}
		}
		// 바뀐 좋아요 상태
		return isLike;
	}

	@Override
	public List<LikeDto> getLikeList(String accessToken) throws Exception {
		// System.out.println("accessToken: "+accessToken);
		FanDto fanDto = fanRepository.findById(jwtService.accessTokenToUserId(accessToken)).get();

		return likeRepository.findByFanDto_Id(fanDto.getId());
	}

	@Override
	public boolean getLike(Integer id, String header) throws Exception {
		String accessToken = jwtService.headerStringToAccessToken(header).get();
		String role = jwtService.extractRole(accessToken).get();
		int user_id = jwtService.accessTokenToUserId(header);
		if(role.equals(Role.USER.getKey()) || role.equals(Role.ADMIN.getKey())) {
			return likeRepository.existsByFeedDto_IdAndFanDto_Id(id, user_id);
		} else {
			return likeRepository.existsByFeedDto_IdAndArtistDto_Id(id, user_id);
		}
	}

	@Override
	public List<FeedDto> getAllSpecificArtistFeed(int artistId) throws Exception {
		List<FeedDto> specificArtistFeed = feedRepository.findByArtistDto_IdOrderByCreateDateDesc(artistId);

		List<FeedDto> onlyArtistFeed = new ArrayList<>();

		for (FeedDto feedDto : specificArtistFeed) {
			if (feedDto.getType() == 2) {
				onlyArtistFeed.add(feedDto);
			}
		}

		return onlyArtistFeed;
	}

	@Override
	public List<FeedDto> getSpecificDateFeed(String group, Date startDate, Date endDate, Integer type) throws Exception {
		int groupId = groupRepository.findByName(group).getId();
		long oneDayInMillis = 24 * 60 * 60 * 1000;
		Date nextDay = new Date(endDate.getTime() + oneDayInMillis);
		return feedRepository.findByGroupDto_IdAndTypeIsAndCreateDateBetweenOrderByCreateDateDesc(groupId, type, startDate, nextDay);
	}
}
