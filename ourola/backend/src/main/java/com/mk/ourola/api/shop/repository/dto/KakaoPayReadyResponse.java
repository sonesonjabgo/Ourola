package com.mk.ourola.api.shop.repository.dto;

import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class KakaoPayReadyResponse {
	//response
	private String tid, next_redirect_pc_url;
	private Date created_at;
}
