package com.mk.ourola.api.others.openlive.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "open_live")
@Getter
@Setter
@ToString
@NoArgsConstructor
@Builder
@AllArgsConstructor
@DynamicInsert
public class OpenLiveDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupDto groupDto;

	private String title;

	private String content;

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column(name = "start_date")
	private Date startDate;

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column(name = "ticketing_date")
	private Date ticketingDate;

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column(name = "ticketing_end_date")
	private Date ticketingEndDate;

	@Column(name = "file_path")
	private String filePath;

	@Column(name = "file_extension")
	private String fileExtension;

	@Column(name = "cur_participant")
	private Integer curParticipant;

	@Column(name = "max_participant")
	private Integer maxParticipant;

	public void participate() {
		this.curParticipant++;
	}

	public void cancel() {
		this.curParticipant--;
	}

	public Boolean isFull() {
		return curParticipant >= maxParticipant;
	}

}
