package com.mk.ourola.api.feed.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.LikeRepository;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.feed.repository.dto.LikeDto;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.repository.dto.Role;
import com.mk.ourola.api.user.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FeedServiceImpl implements FeedService {

	private final FeedRepository feedRepository;

	private final GroupRepository groupRepository;

	private final ArtistUserRepository artistUserRepository;

	private final LikeRepository likeRepository;

	private final FanUserRepository fanUserRepository;

	private final JwtService jwtService;

	public List<FeedDto> getAllFeed(String artist) {
		System.out.println(artist + "서비스");
		int groupId = groupRepository.findByName(artist).getId();
		System.out.println(groupId);
		return feedRepository.findByGroupChannelDto_Id(groupId);
	}

	public FeedDto getFeed(String artist, int id) {
		System.out.println(artist + "서비스");
		return feedRepository.findById(id);
	}

	public FeedDto writeFeed(String artist, FeedDto feedDto, String email) {
		Optional<FanUserDto> userDto = fanUserRepository.findByEmail(email);
		Optional<ArtistUserDto> artistDto = artistUserRepository.findByEmail(email);
		GroupChannelDto group = groupRepository.findByName(artist);
		if (userDto.isPresent()) {
			feedDto.setFanUserDto(userDto.get());
		} else if (artistDto.isPresent()) {
			feedDto.setArtistUserDto(artistDto.get());
		}
		feedDto.setGroupChannelDto(groupRepository.findByName(artist));
		feedDto.setGroupChannelDto(group);
		return feedRepository.save(feedDto);
	}

	public void removeFeed(Integer id) {
		feedRepository.deleteById(id);
	}

	public FeedDto modifyFeed(FeedDto FeedDto) {
		return feedRepository.save(FeedDto);
	}

	// TODO: 아티스트 유저도 좋아요 기능 추가해야 함
	public boolean modifyLike(Integer id, String accessToken) throws Exception{
		FeedDto feedDto = feedRepository.findById(id).get();
		accessToken = jwtService.headerStringToAccessToken(accessToken).get();

		String role = jwtService.extractRole(accessToken).get();
		String email = jwtService.extractEmail(accessToken).get();
		boolean isLike;	// 바뀐 좋아요 상태

		if(role.equals(Role.USER.getKey())) {
			FanUserDto fanUserDto = fanUserRepository.findByEmail(email).get();
			LikeDto likeDto = likeRepository.findByFanUserDto_IdAndFeedDto_Id(fanUserDto.getId(), feedDto.getId()).orElse(null);

			if(likeDto != null) {					// 이미 좋아요 되어있을 때
				likeRepository.deleteById(likeDto.getLikeId());	// like 테이블에서 해당 행 삭제
				feedDto.setLike(feedDto.getLike() -1);
				feedRepository.save(feedDto);
				isLike = false;
			} else {								// 해당 피드가 좋아요 안되어 있을 때
				LikeDto newLikeDto = LikeDto.builder()
					.feedDto(feedDto)
					.fanUserDto(fanUserDto)
					.artistUserDto(null)
					.build();
				likeRepository.save(newLikeDto);	// like 테이블에 추가
				// 피드에
				feedDto.setLike(feedDto.getLike() +1);
				feedRepository.save(feedDto);
				isLike = true;
			}
		} else {
			ArtistUserDto artistUserDto = artistUserRepository.findByEmail(email).get();
			LikeDto likeDto = likeRepository.findByArtistUserDto_IdAndFeedDto_Id(artistUserDto.getId(), feedDto.getId()).orElse(null);

			if(likeDto != null) {					// 이미 좋아요 되어있을 때
				likeRepository.deleteById(likeDto.getLikeId());	// like 테이블에서 해당 행 삭제
				feedDto.setLike(feedDto.getLike() -1);
				feedRepository.save(feedDto);
				isLike = false;
			} else {								// 해당 피드가 좋아요 안되어 있을 때
				LikeDto newLikeDto = LikeDto.builder()
					.feedDto(feedDto)
					.fanUserDto(null)
					.artistUserDto(artistUserDto)
					.build();
				likeRepository.save(newLikeDto);	// like 테이블에 추가
				// 피드에
				feedDto.setLike(feedDto.getLike() +1);
				feedRepository.save(feedDto);
				isLike = true;
			}
		}
		// 바뀐 좋아요 상태
		return isLike;
	}

	@Override
	public List<LikeDto> getLikeList(String accessToken) throws Exception {

		FanUserDto fanUserDto = fanUserRepository.findByEmail(jwtService.extractEmail(accessToken).get()).get();

		return likeRepository.findByFanUserDto_Id(fanUserDto.getId());
	}

	public List<FeedDto> getAllSpecificArtistFeed(int artistId) throws Exception {
		List<FeedDto> specificArtistFeed = feedRepository.findByArtistUserDto_Id(artistId);

		List<FeedDto> onlyArtistFeed = new ArrayList<>();

		for (FeedDto feedDto : specificArtistFeed) {
			if (feedDto.getType() == 2) {
				onlyArtistFeed.add(feedDto);
			}
		}

		return onlyArtistFeed;
	}
}
