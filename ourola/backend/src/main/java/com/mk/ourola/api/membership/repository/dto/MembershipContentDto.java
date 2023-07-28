package com.mk.ourola.api.membership.repository.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicInsert;

import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "membership_contents")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
public class MembershipContentDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupDto groupDto;

	private String title;

	@Column(name = "create_time")
	private Date createTime;

	@Column(name = "file_path")
	private String filePath;

	@Column(name = "file_extension")
	private String file_extension;

}
