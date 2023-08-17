package com.mk.ourola.api.live.repository.Dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "live")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LiveDto {

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

	@Column(name = "start_date")
	private Date startDate;

	private boolean membership;

	@Column(name = "session_id")
	private String sessionId;
}
