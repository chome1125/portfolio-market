import * as S from "./index.style";

export default function CommentWrapper() {
  return (
    <S.CommentWrapper>
      <S.WriteComment_Wrapper>
        <h3>댓글</h3>
        <S.WriteInfo>
          <S.Writer type="text" placeholder="작성자" />
          <S.Password type="password" placeholder="비밀번호" />
          <S.Score>★★★★★</S.Score>
        </S.WriteInfo>
        <S.Comment placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.Comment>
      </S.WriteComment_Wrapper>

      <S.PrevComment_Wrapper>
        <S.Prev_Comment>
          <S.Comment_ProfileImage src="../../ic_profile.png" />
          <S.Comment_Wrapper>
            <S.Comment_Name>노원두</S.Comment_Name>
            <S.Comment_Score>★★★★★</S.Comment_Score>
            <S.Comment_Contents>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </S.Comment_Contents>
            <S.Comment_Date>2021.02.22</S.Comment_Date>
          </S.Comment_Wrapper>
        </S.Prev_Comment>
        <S.Prev_Comment>
          <S.Comment_ProfileImage src="../../ic_profile.png" />
          <S.Comment_Wrapper>
            <S.Comment_Name>노원두</S.Comment_Name>
            <S.Comment_Score>★★★★★</S.Comment_Score>
            <S.Comment_Contents>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </S.Comment_Contents>
            <S.Comment_Date>2021.02.22</S.Comment_Date>
          </S.Comment_Wrapper>
        </S.Prev_Comment>
        <S.Prev_Comment>
          <S.Comment_ProfileImage src="../../ic_profile.png" />
          <S.Comment_Wrapper>
            <S.Comment_Name>노원두</S.Comment_Name>
            <S.Comment_Score>★★★★★</S.Comment_Score>
            <S.Comment_Contents>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </S.Comment_Contents>
            <S.Comment_Date>2021.02.22</S.Comment_Date>
          </S.Comment_Wrapper>
        </S.Prev_Comment>
      </S.PrevComment_Wrapper>
    </S.CommentWrapper>
  );
}
