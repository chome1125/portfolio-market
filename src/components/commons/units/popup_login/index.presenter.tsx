import * as S from "./index.styles";

interface Iprops {
  popupActive: boolean;
  onClickPopup: () => void;
}

export default function PopupLoginUI(props: Iprops): JSX.Element {
  return (
    <S.Popup popupActive={props.popupActive}>
      로그인 창입니더
      <S.Button_close onClick={props.onClickPopup}>닫기</S.Button_close>
      <S.Button_send>전송</S.Button_send>
    </S.Popup>
  );
}
