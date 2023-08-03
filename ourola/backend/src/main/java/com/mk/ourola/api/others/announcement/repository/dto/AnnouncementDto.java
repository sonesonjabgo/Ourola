package com.mk.ourola.api.others.announcement.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "announcement")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
public class AnnouncementDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupDto groupDto;

	@ManyToOne
	@JoinColumn(name = "artist_id")
	private ArtistDto artistDto;

	private String title;
	private String content;

	@Column(name = "create_time")
	private Date createTime;
}
