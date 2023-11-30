import PopupLoginUI from "./index.presenter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../../../../commons/schema/createUset";
import { yupResolver } from "@hookform/resolvers/yup";

interface Iprops {
  popupActive: boolean;
  index: number;
  onClickPopup: (index: number) => () => void;
}

export default function PopupLogin(props: Iprops): JSX.Element {
  const [passwordMessage, setPasswordMessage] = useState<boolean>(true);

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangePasswordCheck = () => {};

  return (
    <PopupLoginUI
      index={props.index}
      popupActive={props.popupActive}
      onClickPopup={props.onClickPopup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
