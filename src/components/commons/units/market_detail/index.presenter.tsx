import CommentWrapper from "../Wrapper_Comment";
import WriterWrapper from "../Wrapper_Writer";
import * as S from "./index.style";

export default function MarketDetailUI() {
  return (
    <S.Inner>
      <S.Detail_Wrapper>
        <WriterWrapper MarketDetail={true} />
        <S.Contents_Wrapper>
          <S.ProductInfo_Wrapper>
            <S.Product_Name1>2019 LTE 32GB</S.Product_Name1>
            <S.Product_Name2>삼성전자 갤럭시탭A 10.1</S.Product_Name2>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.ProductInfo_Wrapper>

          <S.Carousel_Wrapper></S.Carousel_Wrapper>

          <S.Description_wrapper>
            액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
            신경쓰이지않을정도입니다 박스 보관중입니다 메모용과
            넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
            잘 안써서 싸게넘깁니다 택배거래안합니다
            <S.HashTag>#삼성전자 #갤럭시탭 #갓성비</S.HashTag>
          </S.Description_wrapper>

          <S.Map_Wrapper />
        </S.Contents_Wrapper>

        <S.Button_Wrapper>
          <S.Button1>목록으로</S.Button1>
          <S.Button2>수정하기</S.Button2>
        </S.Button_Wrapper>
      </S.Detail_Wrapper>
      <CommentWrapper />
    </S.Inner>
  );
}
