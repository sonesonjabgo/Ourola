package com.mk.ourola.api.others.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "open_live")
@Getter
@Setter
@ToString
@NoArgsConstructor
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

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "ticketing_date")
	private Date ticketingDate;

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
