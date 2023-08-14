package com.mk.ourola.api.common.file.service;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.feed.repository.dto.FeedDto;
import com.mk.ourola.api.media.onlineconcert.repository.dto.OnlineConcertDto;
import com.mk.ourola.api.mypage.repository.dto.MembershipPayDto;

public interface FileService {
	public FanDto writeProfileImage(MultipartFile file, String email) throws
		NoSuchAlgorithmException,
		IOException;

	public byte[] getProfileImg(int id) throws IOException;

	public String writeFeedImages(List<MultipartFile> files, FeedDto feedDto) throws
		NoSuchAlgorithmException,
		IOException;

	public String ShopMainImageToPath(MultipartFile mainFile) throws
		NoSuchAlgorithmException,
		IOException;

	public String writeShopImages(List<MultipartFile> files, OnlineConcertDto onlineConcertDto,
		MembershipPayDto membershipPayDto) throws
		NoSuchAlgorithmException,
		IOException;

	public String openLiveImgToPath(MultipartFile file) throws
		NoSuchAlgorithmException,
		IOException;

	public String removeFeedImage(int feedId);

	public byte[] getShopMainImg(String filePath) throws IOException;

	byte[] getShopDetailImg(String filePath) throws IOException;

	public byte[] getArtistProfileImg(int id) throws IOException;

	public byte[] getGroupImg(String filePath) throws IOException;

	public Map<String, String> writeGroupImage(MultipartFile file) throws
		NoSuchAlgorithmException,
		IOException;

	byte[] getFeedImg(String filePath) throws IOException;

	byte[] getOnlineConcertMainImgList(String group) throws Exception;

	public byte[] getOpenLiveImg(String filePath) throws IOException;
}
