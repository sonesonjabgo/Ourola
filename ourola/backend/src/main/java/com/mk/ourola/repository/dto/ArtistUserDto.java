package com.mk.ourola.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "artist_user")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class ArtistUserDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupChannelDto groupChannelDto;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "profile_id", referencedColumnName = "id")
	private ProfileFileDto profileFileDto;

	private String email;

	private String password;

	private String name;

	private int age;

	@Column(name = "regist_date")
	private Date registDate;

	private boolean resign;

	@Column(name = "is_admin")
	private boolean isAdmin;

	private String tel;

	@Column(name = "refresh_token")
	private String refreshToken;

}
