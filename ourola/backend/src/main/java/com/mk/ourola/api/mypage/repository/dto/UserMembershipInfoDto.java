package com.mk.ourola.api.mypage.repository.dto;

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

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "user_membership_info")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
public class UserMembershipInfoDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "membership_id")
	private MembershipPayDto membershipPayDto;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanDto fanDto;

	@Column(name = "expire_date")
	private Date expireDate;

	@Column(name = "group_name")
	private String groupName;
}
