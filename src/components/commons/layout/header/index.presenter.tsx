import PopupLogin from "../../units/popup_login/index.container";
import * as S from "./index.styles";

interface Iprops {
  index: number;
  popupActive: boolean;
  onClickPopup: (button: number) => () => void;
}

export default function LayoutHeaderUI(props: Iprops): JSX.Element {
  return (
    <S.Wrapper>
      {props.popupActive && (
        <PopupLogin
          index={props.index}
          onClickPopup={props.onClickPopup}
          popupActive={props.popupActive}
        />
      )}

      <S.Inner>
        <S.Logo src="../../../logo.png" />
        <S.ButtonWrapper>
          <S.Button_Login onClick={props.onClickPopup(1)}>
            로그인
          </S.Button_Login>
          <S.Button_Signup onClick={props.onClickPopup(2)}>
            회원가입
          </S.Button_Signup>
        </S.ButtonWrapper>
      </S.Inner>
    </S.Wrapper>
  );
}
