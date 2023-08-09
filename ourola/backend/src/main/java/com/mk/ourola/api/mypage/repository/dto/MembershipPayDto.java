package com.mk.ourola.api.mypage.repository.dto;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mk.ourola.api.common.file.repository.dto.FeedFileDto;
import com.mk.ourola.api.common.file.repository.dto.ShopFileDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

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
	private GroupDto groupDto;

	private String title;

	private Integer price;

	private String content;

	@CreationTimestamp
	@Column(name = "create_date", updatable = false)
	private Date createDate;

	@Column(name = "expiration_date", updatable = false)
	private String expirationDate;

	@Column(name = "file_path")
	private String filePath;

	@OneToMany(mappedBy = "membershipPayDto", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<ShopFileDto> fileList;
}
