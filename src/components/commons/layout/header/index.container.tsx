import { useState } from "react";
import LayoutHeaderUI from "./index.presenter";

export default function LayoutHeader(): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);

  const onClickPopup = (): void => {
    setPopupActive(!popupActive);
    console.log(popupActive);
  };

  return (
    <LayoutHeaderUI popupActive={popupActive} onClickPopup={onClickPopup} />
  );
}
