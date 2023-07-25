package com.mk.ourola.api.shop.repository.dto;

import lombok.Data;

@Data
public class AmountVO {
	private Integer total, tax_free, vat, point, discount;
}
