package com.mk.ourola.api.user.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "membership_pay")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
public class MembershipPayDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@OneToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	private String title;

	private Integer price;

	private String detail;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "expiration_date")
	private String expirationDate;
}
