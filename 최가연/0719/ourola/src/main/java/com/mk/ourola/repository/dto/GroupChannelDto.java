package com.mk.ourola.repository.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "group_channel")
@Getter @Setter @ToString
@NoArgsConstructor
public class GroupChannelDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// @ManyToOne
	// @JoinColumn(name = "user_id")
	// private FanUserDto fanUserDto;

	private String name;
}
