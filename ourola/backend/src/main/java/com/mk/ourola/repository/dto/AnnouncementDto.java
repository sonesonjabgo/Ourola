package com.mk.ourola.repository.dto;

import java.util.Date;

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

@Entity(name = "announcement")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class AnnouncementDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistUserDto artistUserDto;

	private String title;
	private String content;

	@Column(name = "create_time")
	private Date createTime;
}
