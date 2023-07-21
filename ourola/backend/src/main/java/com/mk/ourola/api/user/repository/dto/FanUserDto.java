package com.mk.ourola.api.user.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.DynamicInsert;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "fan_user")
@Getter
@Setter
@ToString
@NoArgsConstructor
@Builder
@AllArgsConstructor
@DynamicInsert
public class FanUserDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "profile_id", referencedColumnName = "id")
	private ProfileFileDto profileFileDto;

	private String email;

	private String password;

	private String name;

	private Integer age;

	@Column(name = "regist_date")
	private Date registDate;

	private boolean resign;

	@Column(name = "is_admin")
	private boolean isAdmin;

	@Column(name = "refresh_token")
	private String refreshToken;

	private String tel;

	@Enumerated(EnumType.STRING)
	private Role role;

	// 유저 권한 설정 메소드 ( 소셜로그인(간편) : 게스트, 추가 기능 사용시 자체 로그인 필요 )
	public void authorizeUser() {
		this.role = Role.USER;
	}

	// 비밀번호 암호화 메소드
	public void passwordEncode(PasswordEncoder passwordEncoder) {
		this.password = passwordEncoder.encode(this.password);
	}

	public void updateRefreshToken(String updateRefreshToken) {
		this.refreshToken = updateRefreshToken;
	}
}
