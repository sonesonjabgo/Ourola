package com.mk.ourola.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name="bookmark")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BookMarkDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanUserDto fanUserDto;

	@ManyToOne
	@JoinColumn(name = "feed_id")
	private FanFeedDto fanFeedDto;

}
