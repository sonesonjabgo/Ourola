package com.mk.ourola.api.user.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "notification")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class NotificationDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanUserDto fanUserDto;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	@ManyToOne
	@JoinColumn(name = "feed_id")
	private FeedDto feedDto;

	private String content;

	@Column(name = "create_time")
	private Date createTime;

	private boolean read;
}
