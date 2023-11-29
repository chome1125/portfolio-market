import { useState } from "react";
import MyPageUI from "./index.presenter";
import { Password } from "./../../../../../../class/styles/boardsNew";

export default function MyPageContainer(): JSX.Element {
  const [myPageTapMenu, setmyPageTapMenu] = useState<number>(0);
  const [subTabMenu, setsubTabMenu] = useState<number>(0);
  const [currentPassword, setCurrentPassword] = useState<string>();
  const [newPassword, setNewPassword] = useState<string>();
  const [newPassword2, setNewPassword2] = useState<string>();
  const [active, setActive] = useState<boolean>(false);

  const onClickMyPageTapMenu = (tap: number) => (): void => {
    setmyPageTapMenu(tap);
    setsubTabMenu(0);
    setCurrentPassword("");
    setNewPassword("");
    setNewPassword2("");
    setActive(false);
  };

  const onClickSubTabMenu = (tab: number) => (): void => {
    setsubTabMenu(tab);
  };

  const onChangeCurrent = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCurrentPassword(event.target.value);

    if (event.target.value && newPassword && newPassword2) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const onChangeNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewPassword(event.target.value);

    if (currentPassword && event.target.value && newPassword2) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const onChangeNewPassword2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewPassword2(event.target.value);

    if (currentPassword && newPassword && event.target.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const activeButton = (): void => {
    if (currentPassword && newPassword && newPassword2) {
      setActive(true);
    } else {
      setActive(false);
    }
    console.log("현재 비번 : " + currentPassword);
    console.log("1차 비번 : " + newPassword);
    console.log("2차 비번 : " + newPassword2);
    console.log("활성화 : " + active);
  };

  return (
    <MyPageUI
      myPageTapMenu={myPageTapMenu}
      subTabMenu={subTabMenu}
      onClickMyPageTapMenu={onClickMyPageTapMenu}
      onClickSubTabMenu={onClickSubTabMenu}
      onChangeCurrent={onChangeCurrent}
      onChangeNewPassword={onChangeNewPassword}
      onChangeNewPassword2={onChangeNewPassword2}
      active={active}
      activeButton={activeButton}
    />
  );
}
