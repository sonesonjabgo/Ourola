package com.mk.ourola.api.user.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "membership_pay")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class MembershipPayDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;

	private int price;

	private String detail;

	@Column(name = "create_date")
	private Date createDate;

	@Column(name = "expiration_date")
	private Date expirationDate;
}