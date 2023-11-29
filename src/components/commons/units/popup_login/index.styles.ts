import styled from "@emotion/styled";

export const Popup = styled.div<{ popupActive: boolean }>`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: red;
  width: 300px;
  height: 200px;
  text-align: center;
`;

export const Button_close = styled.button``;

export const Button_send = styled.button``;
