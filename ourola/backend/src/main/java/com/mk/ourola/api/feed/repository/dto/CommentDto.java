package com.mk.ourola.api.feed.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "comment")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class CommentDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	private String content;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "update_time")
	private Date updateTime;

	@Column(name = "re_comment_count")
	private Integer reCommentCount;
}
