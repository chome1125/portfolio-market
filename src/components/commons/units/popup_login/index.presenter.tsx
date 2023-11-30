import { register } from "module";
import * as S from "./index.styles";

interface Iprops {
  popupActive: boolean;
  index: number;
  onClickPopup: (index: number) => () => void;
}

export default function PopupLoginUI(props: Iprops): JSX.Element {
  return (
    <S.Popup popupActive={props.popupActive}>
      <S.Popup_wrapper>
        <S.Popup_Title>
          {props.index == 1 ? "로그인" : "회원가입"}
        </S.Popup_Title>

        <S.Input_wrapper>
          <S.Email>
            이메일
            <br />
            <S.Input_Email type="text" {...register("email")} />
          </S.Email>

          <S.Password>
            비밀번호
            <br />
            <S.Input_password type="password" {...register("password1")} />
          </S.Password>

          {props.index == 2 && (
            <S.Password2>
              2차 비밀번호
              <br />
              <S.Input_password2 type="password" {...register("password2")} />
            </S.Password2>
          )}

          <S.Error_message>{}</S.Error_message>
        </S.Input_wrapper>

        <S.Button_wrapper>
          <S.Button_close onClick={props.onClickPopup(0)}>닫기</S.Button_close>
          <S.Button_send>전송</S.Button_send>
        </S.Button_wrapper>
      </S.Popup_wrapper>
    </S.Popup>
  );
}
