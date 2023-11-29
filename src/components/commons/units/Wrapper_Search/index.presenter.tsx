import * as S from "./index.style";

interface IProps {
  subTabMenu?: number;
  myPageTapMenu?: number;
}

export default function SearchWrapperUI(props: IProps) {
  return (
    <S.Search_Wrapper>
      <S.Input placeholder="필요한 내용을 검색해주세요." />
      <S.Button>검색</S.Button>
    </S.Search_Wrapper>
  );
}
