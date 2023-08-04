package com.mk.ourola.api.common.file.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "shop_file")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShopFileDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "membership_pay_id")
	@JsonBackReference
	private MembershipPayDto membershipPayDto;

	@ManyToOne
	@JoinColumn(name = "online_concert_id")
	@JsonBackReference
	private OnlineConcertDto onlineConcertDto;

	@Column(name = "file_path")
	private String filePath;

}
