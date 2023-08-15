package com.mk.ourola.api.media.onlinecall.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mk.ourola.api.fan.repository.dto.FanDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "video_call_user")
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OnlineCallWinner {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanDto fanDto;

	@ManyToOne
	@JoinColumn(name = "video_call_id")
	private OnlineCallDto onlineCallDto;

	@Column(name = "start_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	private Date startDate;
}
