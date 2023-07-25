package com.mk.ourola.api.membership.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mk.ourola.api.artist.repository.ArtistUserRepository;
import com.mk.ourola.api.artist.repository.GroupRepository;
import com.mk.ourola.api.artist.repository.dto.ArtistUserDto;
import com.mk.ourola.api.artist.repository.dto.GroupChannelDto;
import com.mk.ourola.api.membership.repository.MembershipContentsRepository;
import com.mk.ourola.api.membership.repository.dto.MembershipContentsDto;
import com.mk.ourola.api.user.repository.FanUserRepository;
import com.mk.ourola.api.user.repository.dto.FanUserDto;
import com.mk.ourola.api.user.service.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MembershipOnlyServiceImpl implements MembershipOnlyService {
	private final MembershipContentsRepository membershipContentsRepository;
	private final GroupRepository groupRepository;
	private final FanUserRepository fanUserRepository;
	private final ArtistUserRepository artistUserRepository;
	private final JwtService jwtService;

	// TODO : 세세한 에러 처리 필요함
	@Override
	public List<MembershipContentsDto> getAllMembershipOnlyContent(String groupName) throws Exception {
		try {
			GroupChannelDto group = groupRepository.findByName(groupName);
			return membershipContentsRepository.findByGroupChannelDto_Id(group.getId());
		} catch (Exception e) {
			throw new Exception("Error :: 에러 발생");
		}
	}

	@Override
	public MembershipContentsDto uploadMembershipOnlyContent(String accessToken,
		MembershipContentsDto membershipContentsDto) throws Exception {

		String type = jwtService.extractRole(accessToken).get();
		if(type.equals("artist")){
			ArtistUserDto admin = artistUserRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

			if(admin.getIsAdmin() && admin.getGroupChannelDto().getId() == membershipContentsDto.getGroupChannelDto().getId()){
				try {
					return membershipContentsRepository.save(membershipContentsDto);    // db에 저장
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
	@Override
	public Optional<MembershipContentsDto> getMembershipOnlyContent(String accessToken, int contentId) throws
		Exception {

		String type = jwtService.extractRole(accessToken).get();
		if(type.equals("user")) {
			FanUserDto fan = fanUserRepository.findByEmail(jwtService.extractEmail(accessToken).get())
				.orElseThrow(() -> new Exception("존재하지 않는 사용자"));

		}
		return membershipContentsRepository.findById(contentId);
	}

	@Override
	public Optional<MembershipContentsDto> modifyMembershipOnlyContent(String accessToken,
		MembershipContentsDto newMembershipContentsDto) throws Exception {

		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto admin = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		if (admin.getIsAdmin() && admin.getGroupChannelDto().getId() == newMembershipContentsDto.getGroupChannelDto()
			.getId()) {
			Optional<MembershipContentsDto> content = membershipContentsRepository.findById(
				newMembershipContentsDto.getId());
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
				membershipContentsRepository.save(t);
			});
			return content;
		} else {
			return Optional.empty();
		}
	}

	@Override
	public void removeMembershipOnlyContent(String accessToken, int contentId) throws Exception {

		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto admin = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		if (admin.getIsAdmin()) {
			membershipContentsRepository.deleteById(contentId);
		} else {
			System.out.println("Error :: 관리자가 아님!");
		}
	}
}
