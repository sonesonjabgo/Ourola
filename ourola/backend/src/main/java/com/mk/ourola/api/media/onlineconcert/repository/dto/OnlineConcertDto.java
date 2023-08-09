package com.mk.ourola.api.media.onlineconcert.repository.dto;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mk.ourola.api.common.file.repository.dto.ShopFileDto;
import com.mk.ourola.api.group.repository.dto.GroupDto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "online_concert")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class OnlineConcertDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name = "group_id")
	private GroupDto groupDto;

	private String title;

	private String content;

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@Column(name = "start_time")
	private Date startTime;

	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@Column(name = "ticketing_time")
	private Date ticketingTime;

	@CreationTimestamp
	@Column(name = "create_date", updatable = false)
	private Date createDate;

	private Integer price;

	@Column(name = "file_path")
	private String filePath;

	@Column(name = "file_extension")
	private String fileExtension;

	@Column(name = "session_id")
	private String sessionId;

	@OneToMany(mappedBy = "onlineConcertDto", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<ShopFileDto> fileList;

	// private void setFileList(List<ShopFileDto> fileList) {
	// 	this.getFileList().clear();
	// 	this.getFileList().addAll(fileList);
	// 	// this.fileList = fileList;
	// }
	// public void addFileList(ShopFileDto file) {
	// 	fileList.add(file);
	// }
	// public void removeFileList(ShopFileDto file) {
	// 	fileList.remove(file);
	// }

	@Column(name = "is_open")
	private boolean isOpen;

	private boolean deleted;

	public void delete() {
		this.deleted = true;
	}

}
