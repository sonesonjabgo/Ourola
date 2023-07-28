package com.mk.ourola.api.feed.repository.dto;

import javax.persistence.Column;
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

@Entity(name = "like")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LikeDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "like_id")
	private int likeId;

	@ManyToOne
	@JoinColumn(name = "feed_id")
	private FeedDto feedDto;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanDto fanDto;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistDto artistDto;
}
