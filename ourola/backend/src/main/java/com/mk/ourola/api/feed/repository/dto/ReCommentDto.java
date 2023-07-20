package com.mk.ourola.api.feed.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.user.repository.dto.FanUserDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "re_comment")
@Getter @Setter @ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReCommentDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanUserDto userId;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistUserDto artist_id;

	@ManyToOne
	@JoinColumn(name = "comment_id")
	private CommentDto comment_id;

	private String content;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "update_date")
	private Date updateDate;

}
