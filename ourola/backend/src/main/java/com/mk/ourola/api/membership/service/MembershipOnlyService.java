package com.mk.ourola.api.membership.service;

import java.util.List;

import com.mk.ourola.api.membership.repository.dto.MembershipContentDto;

public interface MembershipOnlyService {
	// 각 그룹 채널의 모든 멤버십 컨텐츠 목록
	public List<MembershipContentDto> getAllMembershipOnlyContent(String group) throws Exception;

	// 멤버십 전용 컨텐츠 등록
	public MembershipContentDto uploadMembershipOnlyContent(String group, String accessToken,
		MembershipContentDto membershipContentsDto) throws Exception;

	// 멤버십 전용 컨텐츠 조회
	public MembershipContentDto getMembershipOnlyContent(String group, String accessToken,
		int contentId) throws Exception;

	// 멤버십 전용 컨텐츠 수정
	public MembershipContentDto modifyMembershipOnlyContent(String group, String accessToken, int contentId,
		MembershipContentDto membershipContentsDto) throws Exception;

	// 멤버십 전용 컨텐츠 삭제
	public void removeMembershipOnlyContent(String group, String accessToken, int contentId) throws Exception;
}
