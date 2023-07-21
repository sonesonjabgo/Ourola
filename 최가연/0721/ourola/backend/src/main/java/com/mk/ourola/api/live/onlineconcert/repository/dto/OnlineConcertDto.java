package com.mk.ourola.api.live.onlineconcert.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "online_concert")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
public class OnlineConcertDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	private String title;

	private String content;

	@Column(name = "start_time")
	private Date startTime;

	@Column(name = "ticketing_time")
	private Date ticketingTime;

	@Column(name = "create_date")
	private Date createDate;

	private Integer price;

	@Column(name = "file_path")
	private String filePath;

	@Column(name = "file_extension")
	private String fileExtension;

}
