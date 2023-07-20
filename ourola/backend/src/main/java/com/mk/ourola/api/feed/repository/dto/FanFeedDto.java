package com.mk.ourola.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "fan_feed")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FanFeedDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanUserDto fanUserDto;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistUserDto artistUserDto;

	private String title;

	private String content;

	@Column(name = "read_count")
	private int readCnt;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "update_date")
	private Date updateDate;

	@Column(name = "`like`")
	private int like;

	// 팬이면 1, 아티스트면 2
	private int type;

}
