import * as S from "./index.styles";
import {
  UseFormReturn,
  UseFormStateReturn,
  UseFormHandleSubmit,
} from "react-hook-form";

interface MyFormData {
  email: string;
  name: string;
  password: string;
}

interface Iprops {
  index: number;
  popupActive: boolean;
  onClickPopup: (index: number) => () => void;
  register: UseFormReturn<MyFormData>["register"];
  handleSubmit: UseFormHandleSubmit<MyFormData>;
  formState: UseFormStateReturn<MyFormData>;
  onClickCreateUser: () => void;
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
            <S.Input_Email type="text" {...props.register("email")} />
            <S.Error_message>
              {props.formState.errors.email?.message}
            </S.Error_message>
          </S.Email>

          <S.Password>
            비밀번호
            <br />
            <S.Input_password type="password" {...props.register("password")} />
            <S.Error_message>
              {props.formState.errors.password?.message}
            </S.Error_message>
          </S.Password>

          {props.index == 2 && (
            <S.Password2>
              닉네임
              <br />
              <S.Input_password2 type="text" {...props.register("name")} />
              <S.Error_message>
                {props.formState.errors.name?.message}
              </S.Error_message>
            </S.Password2>
          )}

          <S.Error_message>{}</S.Error_message>
        </S.Input_wrapper>

        <S.Button_wrapper>
          <S.Button_close onClick={props.onClickPopup(0)}>닫기</S.Button_close>
          <S.Button_send onClick={props.onClickCreateUser}>생성</S.Button_send>
        </S.Button_wrapper>
      </S.Popup_wrapper>
    </S.Popup>
  );
}
