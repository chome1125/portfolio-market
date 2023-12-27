import { useState } from "react";
import LayoutHeaderUI from "./index.presenter";

export default function LayoutHeader(): JSX.Element {
  const [popupActive, setPopupActive] = useState(false);
  const [index, setIndex] = useState<number>(0);

  const onClickPopup = (button: number) => (): void => {
    setPopupActive(!popupActive);
    setIndex(button);
    console.log("현재 index는" + index);
  };

  return (
    <LayoutHeaderUI
      index={index}
      onClickPopup={onClickPopup}
      popupActive={popupActive}
      setPopupActive={setPopupActive}
    />
  );
}
