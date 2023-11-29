import * as S from "./FreeBoard.post.style";

export default function FreeBoardPostUI(props): JSX.Element {
  return (
    <S.Inner>
      <S.Title>
        게시물 {props.address.includes("new") ? "등록" : "수정"}
      </S.Title>
      <S.WriterWrapper>
        <S.Writer>
          작성자
          <input type="text" placeholder="이름을 적어주세요." />
        </S.Writer>
        <S.WriterPassword>
          비밀번호
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </S.WriterPassword>
      </S.WriterWrapper>
      <S.SubjectWrapper>
        제목
        <input type="text" placeholder="제목을 작성해주세요." />
      </S.SubjectWrapper>
      <S.ContentsWrapper>
        내용
        <textarea placeholder="내용을 작성해주세요." />
      </S.ContentsWrapper>
      <S.AddressWrapper>
        주소
        <S.Zipcode>
          <input type="text" placeholder="01234" />
          <button>우편번호 검색</button>
        </S.Zipcode>
        <input type="text" />
        <input type="text" />
      </S.AddressWrapper>

      <S.YoutubeWrapper>
        유튜브
        <input type="text" placeholder="링크를 복사해주세요." />
      </S.YoutubeWrapper>

      <S.PhotoWrapper>
        사진 첨부
        <S.PhotoBoxWrapper>
          <S.PhotoBox src="../../uploadBox.png" />
          <S.PhotoBox src="../../uploadBox.png" />
          <S.PhotoBox src="../../uploadBox.png" />
        </S.PhotoBoxWrapper>
      </S.PhotoWrapper>

      <S.MainWrapper>
        메인 설정
        <S.CheckBox>
          <input type="radio" name="Main" value="youtube" /> 유튜브
          <input type="radio" name="Main" value="photo" /> 사진
        </S.CheckBox>
      </S.MainWrapper>

      <S.ButtonWrapper>
        {props.address.includes("new") ? (
          <S.NewPostButton>등록하기</S.NewPostButton>
        ) : (
          ""
        )}

        {props.address.includes("edit") ? (
          <S.EditPostButtonWrapper>
            <S.EditCancleButton>취소하기</S.EditCancleButton>
            <S.EditButton>수정하기</S.EditButton>
          </S.EditPostButtonWrapper>
        ) : (
          ""
        )}
      </S.ButtonWrapper>
    </S.Inner>
  );
}
