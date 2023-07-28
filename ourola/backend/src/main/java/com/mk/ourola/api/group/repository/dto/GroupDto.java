package com.mk.ourola.api.group.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "group_channel")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class GroupDto {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	@Column(name = "file_path")
	private String filePath;

	@Column(name = "file_extension")
	private String fileExtension;
}
