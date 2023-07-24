package com.mk.ourola.api.membership.service;

import java.util.List;
import java.util.Optional;

import com.mk.ourola.api.membership.repository.dto.MembershipContentsDto;

public interface MembershipOnlyService {
	// 각 그룹 채널의 모든 멤버십 컨텐츠 목록
	public List<MembershipContentsDto> getAllMembershipOnlyContent(String groupName) throws Exception;

	// 멤버십 전용 컨텐츠 등록
	public MembershipContentsDto uploadMembershipOnlyContent(String accessToken,
		MembershipContentsDto membershipContentsDto) throws Exception;

	// 멤버십 전용 컨텐츠 조회
	public Optional<MembershipContentsDto> getMembershipOnlyContent(String accessToken, int contentId) throws Exception;

	// 멤버십 전용 컨텐츠 수정
	public Optional<MembershipContentsDto> modifyMembershipOnlyContent(String accessToken,
		MembershipContentsDto membershipContentsDto) throws Exception;

	// 멤버십 전용 컨텐츠 삭제
	public void removeMembershipOnlyContent(String accessToken, int contentId) throws Exception;
}
