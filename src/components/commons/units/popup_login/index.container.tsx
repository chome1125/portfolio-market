import { useState } from "react";
import PopupLoginUI from "./index.presenter";

export default function PopupLogin(): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);

  const onClickPopup = (): void => {
    setPopupActive(!popupActive);
  };
  return <PopupLoginUI popupActive={popupActive} onClickPopup={onClickPopup} />;
}
