package com.mk.ourola.api.feed.repository.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Entity(name = "bookmark")
public class BookmarkDto {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanDto fanDto;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistDto artistDto;

	@ManyToOne
	@JoinColumn(name = "feed_id")
	private FeedDto feedDto;
}
