package com.mk.ourola.api.membership.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistDto;
import com.mk.ourola.api.common.auth.service.JwtService;
import com.mk.ourola.api.fan.repository.FanRepository;
import com.mk.ourola.api.fan.repository.dto.FanDto;
import com.mk.ourola.api.group.repository.GroupRepository;
import com.mk.ourola.api.group.repository.dto.GroupDto;
import com.mk.ourola.api.membership.repository.MembershipContentRepository;
import com.mk.ourola.api.membership.repository.dto.MembershipContentDto;
import com.mk.ourola.api.mypage.repository.UserMembershipInfoRepository;
import com.mk.ourola.api.mypage.repository.dto.UserMembershipInfoDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MembershipOnlyServiceImpl implements MembershipOnlyService {
	private final MembershipContentRepository membershipContentRepository;
	private final GroupRepository groupRepository;
	private final FanRepository fanRepository;
	private final ArtistRepository artistRepository;
	private final UserMembershipInfoRepository userMembershipInfoRepository;
	private final JwtService jwtService;

	// TODO : 세세한 에러 처리 필요함
	/*
	 * 그룹 별 멤버십 전용 컨텐츠 목록 가져오기
	 * */
	@Override
	public List<MembershipContentDto> getAllMembershipOnlyContent(String groupName) throws Exception {
		try {
			GroupDto group = groupRepository.findByName(groupName);
			return membershipContentRepository.findByGroupDto_Id(group.getId());
		} catch (Exception e) {
			throw new Exception("Error :: 에러 발생");
		}
	}

	/*
	 * 멤버십 전용 컨텐츠 업로드
	 * */
	@Override
	public MembershipContentDto uploadMembershipOnlyContent(String groupName, String accessToken,
		MembershipContentDto membershipContentsDto) throws Exception {

		String type = jwtService.extractRole(accessToken).get();
		if (type.equals("ARTIST")) {    // 아티스트 dto에서 관리자인지 확인하기
			ArtistDto admin = artistRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow(() -> new Exception("존재하지 않는 관리자"));

			if (admin.getIsAdmin() && admin.getGroupDto().getName().equals(groupName)) {
				try {
					return membershipContentRepository.save(membershipContentsDto);    // db에 저장
				} catch (Exception e) {
					throw new Exception("Error :: 에러 발생");
				}
			}
		} else {
			throw new Exception("Error :: 관리자가 아님");
		}
		return null;
	}

	// TODO : 팬 중에서 멤버십을 산 사람이 있는지 확인!
	/*
	 * 멤버십 전용 컨텐츠 조회
	 * */
	@Override
	public MembershipContentDto getMembershipOnlyContent(String groupName, String accessToken,
		int contentId) throws Exception {
		String type = jwtService.extractRole(accessToken).get();
		// 팬의 경우
		if (type.equals("USER")) {
			FanDto fan = fanRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

			// 팬이 구매한 멤버십 기록을 받아온다
			List<UserMembershipInfoDto> membership = userMembershipInfoRepository.findByFanDto_Id(fan.getId());
			if (!membership.isEmpty()) {    // 멤버십 구매 이력이 있다면
				for (UserMembershipInfoDto u : membership) {    // 멤버십 리스트를 돌면서 가입정보를 가져옴
					// 결제 기록에서 group id와 매개변수로 받은 groupName에서 받아온 groupid와 같으면 멤버십 컨텐츠 반환
					if (u.getGroupName().equals(groupName)) {
						return membershipContentRepository.findById(contentId).orElseThrow();
					}
				}
			}
		} else if (type.equals("ARTIST")) {    // 아티스트의 경우
			ArtistDto artist = artistRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow();
			// 해당 아티스트가 속해있는 그룹이면 멤버십 컨텐츠 반환
			if (artist.getGroupDto().getName().equals(groupName)) {
				return membershipContentRepository.findById(contentId).orElseThrow();
			}
		}
		return null;
	}

	/*
	 * 멤버십 전용 컨텐츠 수정
	 * */
	@Override
	public MembershipContentDto modifyMembershipOnlyContent(String groupName, String accessToken, int contentId,
		MembershipContentDto newMembershipContentsDto) throws Exception {

		String type = jwtService.extractRole(accessToken).get();
		if (type.equals("ARTIST")) {    // 아티스트 dto에서 관리자인지 확인하기
			ArtistDto admin = artistRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow(() -> new Exception("존재하지 않는 관리자"));

			// 해당 그룹의 관리자인지 확인하기
			if (admin.getIsAdmin() && admin.getGroupDto().getName().equals(groupName)) {
				try {
					Optional<MembershipContentDto> content = membershipContentRepository.findById(contentId);
					content.ifPresent(t -> {
						if (newMembershipContentsDto.getTitle() != null) {
							t.setTitle(newMembershipContentsDto.getTitle());
						}
						if (newMembershipContentsDto.getFilePath() != null) {
							t.setFilePath(newMembershipContentsDto.getFilePath());
						}
						if (newMembershipContentsDto.getFile_extension() != null) {
							t.setFile_extension(newMembershipContentsDto.getFile_extension());
						}
						membershipContentRepository.save(t);
					});
				} catch (Exception e) {
					throw new Exception("Error :: 에러 발생");
				}
			}
		} else {
			throw new Exception("Error :: 관리자가 아님");
		}
		return null;
	}

	// TODO : 멤버십 전용 컨텐츠 삭제 확인
	/*
	 * 멤버십 전용 컨텐츠 삭제
	 * */
	@Override
	public void removeMembershipOnlyContent(String groupName, String accessToken, int contentId) throws Exception {

		if (jwtService.extractRole(accessToken).get().equals("ARTIST")) {
			String email = jwtService.extractEmail(accessToken).get();
			ArtistDto admin = artistRepository.findByEmail(email)
				.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

			if (admin.getIsAdmin() && admin.getGroupDto().getName().equals(groupName)) {
				membershipContentRepository.deleteById(contentId);
			} else {
				System.out.println("Error :: 관리자가 아님!");
			}
		} else {
			throw new Exception("Error :: 관리자가 아님!");
		}

	}
}
