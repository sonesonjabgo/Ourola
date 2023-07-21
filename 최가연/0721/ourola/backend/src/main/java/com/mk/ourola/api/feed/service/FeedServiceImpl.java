package com.mk.ourola.api.feed.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.feed.repository.FeedRepository;
import com.mk.ourola.api.feed.repository.dto.FeedDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedServiceImpl implements FeedService {

	private final FeedRepository FeedRepository;

	private final GroupRepository groupRepository;

	private final ArtistUserRepository artistUserRepository;

	public List<FeedDto> getAllFeed(String artist) {
		System.out.println(artist + "서비스");
		int groupId = groupRepository.findByName(artist).getId();
		System.out.println(groupId);
		return FeedRepository.findByGroupChannelDto_Id(groupId);
	}

	public FeedDto getFeed(String artist, int id) {
		System.out.println(artist + "서비스");
		return FeedRepository.findById(id);
	}

	public FeedDto writeFeed(String artist, FeedDto FeedDto) {
		FeedDto.setGroupChannelDto(groupRepository.findByName(artist));
		return FeedRepository.save(FeedDto);
	}

	public void removeFeed(Integer id) {
		FeedRepository.deleteById(id);
	}

	public FeedDto modifyFeed(FeedDto FeedDto) {
		return FeedRepository.save(FeedDto);
	}

	public List<FeedDto> getAllSpecificArtistFeed(String artist, int artistId) throws Exception {
		ArtistUserDto artistUserDto = artistUserRepository.findByName(artist);

		if (artistUserDto != null && !artistUserDto.getName().equals(artist)) {
			throw new Exception(); // 세세한 예외 처리 필요
		}

		List<FeedDto> specificArtistFeed = FeedRepository.findByArtistUserDto_Id(artistId);

		List<FeedDto> onlyArtistFeed = new ArrayList<>();

		for (FeedDto feedDto : specificArtistFeed) {
			if (feedDto.getType() == 2) {
				onlyArtistFeed.add(feedDto);
			}
		}

		return onlyArtistFeed;
	}
}
