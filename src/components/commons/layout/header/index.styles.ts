import styled from "@emotion/styled";

export const Wrapper = styled.section`
  height: 152px;
`;

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

export const Inner = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 236px;
  height: 36px;
  object-fit: cover;
  display: block;
`;

export const ButtonWrapper = styled.ul`
  list-style: none;
  display: flex;
`;
export const Button_Login = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Button_Signup = styled.li`
  margin-left: 20px;
  padding: 10px 16px;
  background: yellow;
  border-radius: 10px;
  cursor: pointer;
`;
