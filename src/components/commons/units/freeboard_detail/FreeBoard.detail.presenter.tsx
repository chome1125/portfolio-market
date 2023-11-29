import Link from "next/link";
import CommentWrapper from "../Wrapper_Comment";
import WriterWrapper from "../Wrapper_Writer";
import * as S from "./FreeBoard.detail.style";

export default function FreeBoardDetailUI(): JSX.Element {
  return (
    <S.Inner>
      <S.DetailWrapper>
        <WriterWrapper />

        <S.ContentsWrapper>
          <h1>게시글 제목입니다.</h1>
          <p>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </p>
          <S.LikeWrapper>
            <S.Like>
              <S.Icon src="../../ic_thumb_up_off_alt-24px.png" />
              1920
            </S.Like>
            <S.UnLike>
              <S.Icon src="../../ic_thumb_down-24px.png" />
              1920
            </S.UnLike>
          </S.LikeWrapper>
        </S.ContentsWrapper>
      </S.DetailWrapper>

      <S.ButtonsWrapper>
        <S.ListButton>
          <Link href="/freeBoard">목록으로</Link>
        </S.ListButton>

        <S.EditButton>수정하기</S.EditButton>
        <S.DeletButton>삭제하기</S.DeletButton>
      </S.ButtonsWrapper>

      <CommentWrapper />
    </S.Inner>
  );
}
