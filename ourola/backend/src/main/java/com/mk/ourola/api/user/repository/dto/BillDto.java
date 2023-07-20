package com.mk.ourola.api.user.repository.dto;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.mk.ourola.api.live.onlineconcert.repository.dto.OnlineConcertDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "bill")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BillDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private FanUserDto fanUserDto;

	@ManyToOne
	@JoinColumn(name = "membership_id")
	private MembershipPayDto membershipPayDto;

	@ManyToOne
	@JoinColumn(name = "concert_id")
	private OnlineConcertDto onlineConcertDto;

	private Date paymentDate;
	
}
