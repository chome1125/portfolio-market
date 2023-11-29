import PopupLogin from "../../units/popup_login/index.container";
import * as S from "./index.styles";

interface Iprops {
  popupActive: boolean;
  onClickPopup: () => void;
}

export default function LayoutHeaderUI(props: Iprops): JSX.Element {
  return (
    <S.Wrapper>
      {props.popupActive && <PopupLogin />}

      <S.Inner>
        <S.Logo src="../../../logo.png" />
        <S.ButtonWrapper>
          <S.Button_Login onClick={props.onClickPopup}>로그인</S.Button_Login>
          <S.Button_Signup onClick={props.onClickPopup}>
            회원가입
          </S.Button_Signup>
        </S.ButtonWrapper>
      </S.Inner>
    </S.Wrapper>
  );
}
