package com.mk.ourola.api.common.auth.repository;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "emailtoken")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EmailTokenDto {

	private static final long EMAIL_TOKEN_EXPIRATION_TIME_VALUE = 5L;


	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(length = 36)
	private String id;

	@Column(name = "expiration_date")
	private LocalDateTime expirationDate;

	private Boolean expired;

	@Column(name = "user_id")
	private Integer fanId;

	// 이메일 인증 토큰 생성
	public static EmailTokenDto createEmailToken(Integer fanId) {
		EmailTokenDto emailToken = new EmailTokenDto();
		emailToken.expirationDate = LocalDateTime.now().plusMinutes(EMAIL_TOKEN_EXPIRATION_TIME_VALUE); // 5분 후 만료
		emailToken.expired = false;
		emailToken.fanId = fanId;

		return emailToken;
	}

	// 토큰 만료
	public void setTokenToUsed() {
		this.expired = true;
	}
}
