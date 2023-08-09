package com.mk.ourola.api.others.openlive.repository.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.others.openlive.repository.dto.OpenLiveDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "open_live_participant")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@Builder
@AllArgsConstructor
public class OpenLiveParticipantDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "fan_id")
	private FanDto fanDto;

	@ManyToOne
	@JoinColumn(name = "open_live_id")
	private OpenLiveDto openLiveDto;
}
