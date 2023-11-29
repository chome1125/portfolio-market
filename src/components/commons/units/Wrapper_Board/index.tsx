import * as S from "./index.style";

interface IProps {
  freeBoard?: boolean;
  myPage?: boolean;
  subTabMenu: number;
  myPageTapMenu?: number;
}

export default function BoardWrapper(props: IProps) {
  const ex1 = "충전";
  const ex2 = "구매";
  const ex3 = "판매";

  return (
    <S.Inner>
      {/* 자유게시판 일때 */}
      {props.freeBoard && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Number freeBoard={props.freeBoard} subTabMenu={props.subTabMenu}>
              번호
            </S.Number>
            <S.Post_Title freeBoard={props.freeBoard}>제목</S.Post_Title>
            <S.Post_Writer freeBoard={props.freeBoard}>작성자</S.Post_Writer>

            <S.Date freeBoard={props.freeBoard}>날짜</S.Date>
          </S.ListInformation>

          <S.PostList>
            <S.Number freeBoard={props.freeBoard} subTabMenu={props.subTabMenu}>
              9
            </S.Number>
            <S.Post_Title freeBoard={props.freeBoard}>
              한 번 밖에 안 쓴 노트북 팝니다.
            </S.Post_Title>
            <S.Post_Writer freeBoard={props.freeBoard}>노원두</S.Post_Writer>
            <S.Date freeBoard={props.freeBoard}>2020.09.28</S.Date>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내장터 - 나의상품 일때 */}
      {props.myPageTapMenu == 0 && props.subTabMenu == 0 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Number subTabMenu={props.subTabMenu}>번호</S.Number>
            <S.Product_Name subTabMenu={props.subTabMenu}>
              상품명
            </S.Product_Name>
            <S.Product_Price subTabMenu={props.subTabMenu}>
              판매가격
            </S.Product_Price>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              날짜
            </S.Date>
          </S.ListInformation>

          <S.PostList>
            <S.Number subTabMenu={props.subTabMenu}>9</S.Number>
            <S.Product_Name subTabMenu={props.subTabMenu}>
              기계식 키보드 팝니다~
              <S.SoldOut subTabMenu={props.subTabMenu}>판매완료</S.SoldOut>
            </S.Product_Name>
            <S.Product_Price subTabMenu={props.subTabMenu}>
              ￦2,000
            </S.Product_Price>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내장터 -마이찜 일때*/}
      {props.myPageTapMenu == 0 && props.subTabMenu == 1 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Number subTabMenu={props.subTabMenu}>번호</S.Number>
            <S.Product_Name subTabMenu={props.subTabMenu}>
              상품명
            </S.Product_Name>
            <S.Product_Price subTabMenu={props.subTabMenu}>
              판매가격
            </S.Product_Price>
            <S.Seller subTabMenu={props.subTabMenu}>판매자</S.Seller>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              날짜
            </S.Date>
          </S.ListInformation>

          <S.PostList>
            <S.Number subTabMenu={props.subTabMenu}>9</S.Number>
            <S.Product_Name subTabMenu={props.subTabMenu}>
              한 번 밖에 안 쓴 노트북 팝니다.
              <S.SoldOut subTabMenu={props.subTabMenu}>판매완료</S.SoldOut>
            </S.Product_Name>
            <S.Product_Price subTabMenu={props.subTabMenu}>
              ￦2,000
            </S.Product_Price>
            <S.Seller subTabMenu={props.subTabMenu}>임 장사꾼</S.Seller>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내 포인트 - 전체내역 일때 */}
      {props.myPageTapMenu == 1 && props.subTabMenu == 0 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              날짜
            </S.Date>
            <S.Contents
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              내용
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래 및 충전 내역
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              잔액
            </S.Balance>
          </S.ListInformation>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.Contents
              ex1={ex1}
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              {ex1}
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              +100,000
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              ￦1,222,000
            </S.Balance>
          </S.PostList>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.Contents
              ex2={ex2}
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              {ex2}
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              -50,000
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              ￦152,000
            </S.Balance>
          </S.PostList>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.Contents
              ex3={ex3}
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              {ex3}
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              +90,000
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              ￦102,000
            </S.Balance>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내 포인트 - 충전내역 일때 */}
      {props.myPageTapMenu == 1 && props.subTabMenu == 1 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              충전일
            </S.Date>
            <S.PaymentID subTabMenu={props.subTabMenu}>결제 ID</S.PaymentID>
            <S.History subTabMenu={props.subTabMenu}>충전내역</S.History>
            <S.Balance subTabMenu={props.subTabMenu}>충전 후 잔액</S.Balance>
          </S.ListInformation>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.PaymentID subTabMenu={props.subTabMenu}>imp_0129706</S.PaymentID>
            <S.History subTabMenu={props.subTabMenu}>+1,000,000</S.History>
            <S.Balance subTabMenu={props.subTabMenu}>￦1,222,000</S.Balance>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내 포인트 - 구매내역 일때 */}
      {props.myPageTapMenu == 1 && props.subTabMenu == 2 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래일
            </S.Date>
            <S.Contents
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              상품명
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래내역
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래 후 잔액
            </S.Balance>
            <S.Seller
              subTabMenu={props.subTabMenu}
              myPageTapMenu={props.myPageTapMenu}
            >
              판매자
            </S.Seller>
          </S.ListInformation>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.Contents
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              기계식 키보드 팝니다~
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              +1,000,000
            </S.History>
            <S.Balance
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              ￦1,222,000
            </S.Balance>
            <S.Seller
              subTabMenu={props.subTabMenu}
              myPageTapMenu={props.myPageTapMenu}
            >
              임장사꾼
            </S.Seller>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 마이페이지 - 내 포인트 - 판매내역 일때 */}
      {props.myPageTapMenu == 1 && props.subTabMenu == 3 && (
        <S.Post_List_Wrapper>
          <S.ListInformation>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래일
            </S.Date>
            <S.Contents
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              상품명
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              거래내역
            </S.History>
            <S.Seller
              subTabMenu={props.subTabMenu}
              myPageTapMenu={props.myPageTapMenu}
            >
              판매자
            </S.Seller>
          </S.ListInformation>

          <S.PostList>
            <S.Date
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              2020.09.28
            </S.Date>
            <S.Contents
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              기계식 키보드 팝니다~
            </S.Contents>
            <S.History
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            >
              +1,000,000
            </S.History>
            <S.Seller
              subTabMenu={props.subTabMenu}
              myPageTapMenu={props.myPageTapMenu}
            >
              임장사꾼
            </S.Seller>
          </S.PostList>
        </S.Post_List_Wrapper>
      )}

      {/* 페이지네이션 부분 - 공통 */}
      <S.List_PageNation>
        <S.Arrow_Left src="../../../ic_navigate_before-24px.png" />
        <S.Arrow_Right src="../../../ic_navigate_next-24px.png" />
      </S.List_PageNation>
    </S.Inner>
  );
}
