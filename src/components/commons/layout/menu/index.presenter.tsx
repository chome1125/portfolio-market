import Link from "next/link";
import * as S from "./index.styles";
import type { NextRouter } from "next/router";

interface Iprops {
  router: NextRouter;
}

export default function LayOutMenuUI(props: Iprops): JSX.Element {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Buttons>
          <S.ButtonFreeBoard router={props.router}>
            <Link href="/freeBoard">자유게시판</Link>
          </S.ButtonFreeBoard>
          <S.ButtonMarket router={props.router}>
            <Link href="/freeMarket">중고마켓</Link>
          </S.ButtonMarket>
          <S.ButtonMyPage router={props.router}>
            <Link href="/myPage">마이페이지</Link>
          </S.ButtonMyPage>
        </S.Buttons>
      </S.Inner>
    </S.Wrapper>
  );
}
