import * as S from "./FreeBoard.styles";
import BoardWrapper from "../Wrapper_Board";

interface IProps {
  freeBoard?: boolean;
}

export default function FreeBoardUI(props: IProps) {
  return (
    <S.Inner>
      <S.Title>베스트 게시글</S.Title>

      <S.BestPostList>
        <S.Card>
          <S.Image />
          <S.BestInformation>
            <h3>게시물 제목입니다.</h3>
            <S.BestInformationWrapper>
              <S.Left>
                <S.Profile>
                  <S.ProfileImage src="../../../ic_profile.png" />
                  <S.Writer>노원두</S.Writer>
                </S.Profile>
                <S.Date>Date : 2021.02.18</S.Date>
              </S.Left>
              <S.LikeBox>
                <S.LikeImage src="../../../thumb_up.png" />
                <S.LikeNumber>356</S.LikeNumber>
              </S.LikeBox>
            </S.BestInformationWrapper>
          </S.BestInformation>
        </S.Card>

        <S.Card>
          <S.Image />
          <S.BestInformation>
            <h3>게시물 제목입니다.</h3>
            <S.BestInformationWrapper>
              <S.Left>
                <S.Profile>
                  <S.ProfileImage src="../../../ic_profile.png" />
                  <S.Writer>노원두</S.Writer>
                </S.Profile>
                <S.Date>Date : 2021.02.18</S.Date>
              </S.Left>
              <S.LikeBox>
                <S.LikeImage src="../../../thumb_up.png" />
                <S.LikeNumber>356</S.LikeNumber>
              </S.LikeBox>
            </S.BestInformationWrapper>
          </S.BestInformation>
        </S.Card>

        <S.Card>
          <S.Image />
          <S.BestInformation>
            <h3>게시물 제목입니다.</h3>
            <S.BestInformationWrapper>
              <S.Left>
                <S.Profile>
                  <S.ProfileImage src="../../../ic_profile.png" />
                  <S.Writer>노원두</S.Writer>
                </S.Profile>
                <S.Date>Date : 2021.02.18</S.Date>
              </S.Left>
              <S.LikeBox>
                <S.LikeImage src="../../../thumb_up.png" />
                <S.LikeNumber>356</S.LikeNumber>
              </S.LikeBox>
            </S.BestInformationWrapper>
          </S.BestInformation>
        </S.Card>

        <S.Card>
          <S.Image />
          <S.BestInformation>
            <h3>게시물 제목입니다.</h3>
            <S.BestInformationWrapper>
              <S.Left>
                <S.Profile>
                  <S.ProfileImage src="../../../ic_profile.png" />
                  <S.Writer>노원두</S.Writer>
                </S.Profile>
                <S.Date>Date : 2021.02.18</S.Date>
              </S.Left>
              <S.LikeBox>
                <S.LikeImage src="../../../thumb_up.png" />
                <S.LikeNumber>356</S.LikeNumber>
              </S.LikeBox>
            </S.BestInformationWrapper>
          </S.BestInformation>
        </S.Card>
      </S.BestPostList>

      <S.SearchWrapper>
        <S.SearchInput />
        <S.SearchDate type="date" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchWrapper>

      <BoardWrapper freeBoard={props.freeBoard} />
    </S.Inner>
  );
}
