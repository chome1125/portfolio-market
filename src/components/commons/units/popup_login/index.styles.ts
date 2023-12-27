import styled from "@emotion/styled";

export const Popup = styled.div<{ popupActive: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: white;
  backdrop-filter: blur(10px);
  font-size: 18px;
`;

export const Popup_wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background: white;

  opacity: 98%;
  width: 450px;
  text-align: center;
  display: block;
  padding: 40px 50px;
`;

export const Popup_Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input_wrapper = styled.div`
  text-align: left;

  input {
    width: 100%;
    padding: 6px;
  }
`;

export const Email = styled.div`
  margin-bottom: 22px;
`;

export const Password = styled.div`
  margin-bottom: 22px;
`;

export const Password2 = styled.div`
  margin-bottom: 22px;
`;

export const Input_Email = styled.input``;

export const Input_password = styled.input``;
export const Input_password2 = styled.input``;
export const Error_message = styled.div`
  color: red;
  font-size: 16px;
`;

export const Button_wrapper = styled.div`
  button {
    padding: 13px 25px;
  }
`;

export const Button_close = styled.button``;

export const Button_send = styled.button`
  margin-left: 15px;
`;
