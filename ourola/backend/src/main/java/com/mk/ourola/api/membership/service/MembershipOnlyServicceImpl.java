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
public class MembershipOnlyServicceImpl implements MembershipOnlyService {
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

		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto admin = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		// admin이 관리자이고, 업로드할 컨텐츠의 그룹id와 admin의 그룹id가 같으면 글 등록 가능
		if (admin.isAdmin() && admin.getGroupChannelDto().getId() == membershipContentsDto.getGroupChannelDto()
			.getId()) {
			try {
				return membershipContentsRepository.save(membershipContentsDto);    // db에 저장
			} catch (Exception e) {
				throw new Exception("Error :: 에러 발생");
			}
		} else {	// 관리자가 아님
			System.out.println("관리자가 아님");
			return null;
		}

	}

	@Override
	public Optional<MembershipContentsDto> getMembershipOnlyContent(String accessToken, int contentId) throws
		Exception {

		// String email = jwtService.extractEmail(accessToken).get();
		//
		// // 이메일로 아티스트 혹은
		// if (artistUserRepository.findByEmail(email).isPresent()) {
		// 	return membershipContentsRepository.findById(contentId);
		// } else {
		// 	Optional<FanUserDto> fan = fanUserRepository.findByEmail(email);
		//
		// }
		return Optional.empty();
	}

	@Override
	public Optional<MembershipContentsDto> modifyMembershipOnlyContent(String accessToken,
		MembershipContentsDto newMembershipContentsDto) throws Exception {

		String email = jwtService.extractEmail(accessToken).get();
		ArtistUserDto admin = artistUserRepository.findByEmail(email)
			.orElseThrow(() -> new Exception("존재하지 않는 아티스트"));

		if (admin.isAdmin() && admin.getGroupChannelDto().getId() == newMembershipContentsDto.getGroupChannelDto()
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

		if (admin.isAdmin()) {
			membershipContentsRepository.deleteById(contentId);
		} else {
			System.out.println("Error :: 관리자가 아님!");
		}
	}
}
