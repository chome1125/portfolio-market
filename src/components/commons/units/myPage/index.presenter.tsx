import BoardWrapper from "../Wrapper_Board";
import * as S from "./index.style";
import SearchWrapper from "../Wrapper_Search/index.container";

interface Iprops {
  subTabMenu: number;
  myPageTapMenu: number;
  onClickMyPageTapMenu: (tap: number) => () => void;
  onClickSubTabMenu: (tap: number) => () => void;
  onChangeCurrent: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNewPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeNewPassword2: (event: React.ChangeEvent<HTMLInputElement>) => void;
  activeButton: () => void;
  active: boolean;
}

export default function MyPageUI(props: Iprops): JSX.Element {
  return (
    <S.Inner>
      <S.Profile_Wrapper>
        <S.Title>MYPAGE</S.Title>
        <S.ProfileImage src="../../ic_profile.png" />
        <S.UserName>노원두</S.UserName>
        <S.UserPoint>100,000</S.UserPoint>
        <S.MyButton_Wrapper>
          <S.MyMarket
            myPageTapMenu={props.myPageTapMenu}
            onClick={props.onClickMyPageTapMenu(0)}
          >
            내 장터
          </S.MyMarket>
          <S.MyPoint
            myPageTapMenu={props.myPageTapMenu}
            onClick={props.onClickMyPageTapMenu(1)}
          >
            내 포인트
          </S.MyPoint>
          <S.MyProfile
            myPageTapMenu={props.myPageTapMenu}
            onClick={props.onClickMyPageTapMenu(2)}
          >
            내 프로필
          </S.MyProfile>
        </S.MyButton_Wrapper>
      </S.Profile_Wrapper>

      {/* 마이페이지 - 내 장터 */}
      {props.myPageTapMenu == 0 && (
        <S.Board_Wrapper>
          <S.Top_Wrapper>
            <S.TabMenu>
              <S.MyProduct
                onClick={props.onClickSubTabMenu(0)}
                subTabMenu={props.subTabMenu}
              >
                나의 상품
              </S.MyProduct>
              <S.MyWish
                onClick={props.onClickSubTabMenu(1)}
                subTabMenu={props.subTabMenu}
              >
                마이찜
              </S.MyWish>
            </S.TabMenu>

            <SearchWrapper
              myPageTapMenu={props.myPageTapMenu}
              subTabMenu={props.subTabMenu}
            />
          </S.Top_Wrapper>

          <BoardWrapper
            myPageTapMenu={props.myPageTapMenu}
            subTabMenu={props.subTabMenu}
          />
        </S.Board_Wrapper>
      )}

      {/* 마이페이지 - 내 포인트*/}
      {props.myPageTapMenu == 1 && (
        <S.Board_Wrapper>
          <S.Top_Wrapper>
            <S.Point_history_Wrapper>
              <S.Point_Total
                subTabMenu={props.subTabMenu}
                onClick={props.onClickSubTabMenu(0)}
              >
                전체내역
              </S.Point_Total>
              <S.Point_Charge
                subTabMenu={props.subTabMenu}
                onClick={props.onClickSubTabMenu(1)}
              >
                충전내역
              </S.Point_Charge>
              <S.Point_Purchase
                subTabMenu={props.subTabMenu}
                onClick={props.onClickSubTabMenu(2)}
              >
                구매내역
              </S.Point_Purchase>
              <S.Point_Sales
                subTabMenu={props.subTabMenu}
                onClick={props.onClickSubTabMenu(3)}
              >
                판매내역
              </S.Point_Sales>
            </S.Point_history_Wrapper>

            {props.subTabMenu == 2 && (
              <SearchWrapper
                myPageTapMenu={props.myPageTapMenu}
                subTabMenu={props.subTabMenu}
              />
            )}

            {props.subTabMenu == 3 && (
              <SearchWrapper
                myPageTapMenu={props.myPageTapMenu}
                subTabMenu={props.subTabMenu}
              />
            )}
          </S.Top_Wrapper>

          <BoardWrapper
            myPageTapMenu={props.myPageTapMenu}
            subTabMenu={props.subTabMenu}
          />
        </S.Board_Wrapper>
      )}

      {/* 마이페이지 - 내 프로필 */}
      {props.myPageTapMenu == 2 && (
        <S.Board_Wrapper myPageTapMenu={props.myPageTapMenu}>
          <S.Password_Wrapper myPageTapMenu={props.myPageTapMenu}>
            <S.SubTitle>비밀번호 변경</S.SubTitle>
            <S.CurrentPassword>
              현재 비밀번호
              <input
                type="password"
                placeholder="현재 비밀번호를 입력해주세요"
                onChange={props.onChangeCurrent}
              />
            </S.CurrentPassword>
            <S.NewPassword>
              새 비밀번호
              <input
                type="password"
                placeholder="새 비밀번호를 입력해 주세요."
                onChange={props.onChangeNewPassword}
              />
            </S.NewPassword>
            <S.NewPassword2>
              새 비밀번호
              <input
                type="password"
                placeholder="새 비밀번호를 확인해 주세요."
                onChange={props.onChangeNewPassword2}
              />
            </S.NewPassword2>
            <S.ChangePasswordButton
              onClick={props.activeButton}
              active={props.active}
            >
              비밀번호 변경하기
            </S.ChangePasswordButton>
          </S.Password_Wrapper>
        </S.Board_Wrapper>
      )}
    </S.Inner>
  );
}
