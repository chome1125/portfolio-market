import styled from "@emotion/styled";

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  height: 1189px;
`;

export const Profile_Wrapper = styled.div`
  padding-right: 75px;
  padding-top: 80px;
`;

export const Board_Wrapper = styled.div<{ myPageTapMenu?: number }>`
  padding-left: ${(props) => {
    if (props.myPageTapMenu == 2) {
      return "126px";
    } else {
      return "40px";
    }
  }};
  padding-top: ${(props) => {
    if (props.myPageTapMenu == 2) {
      return "80px";
    }
  }};
  border-left: 2px solid #f2f2f2;
  width: 980px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

export const ProfileImage = styled.img`
  width: 96px;
  height: 96px;
  margin: 40px 0 20px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;

export const UserPoint = styled.div`
  color: #4f4f4f;
  font-weight: 700;
  margin: 10px 0 69px;
`;

export const MyButton_Wrapper = styled.div`
  font-size: 18px;
`;

export const MyMarket = styled.div<{ myPageTapMenu: number }>`
  font-weight: ${(props) => {
    if (props.myPageTapMenu == 0) {
      return "700";
    } else {
      return "500";
    }
  }};

  color: ${(props) => {
    if (props.myPageTapMenu == 0) {
      return "black";
    } else {
      return "#828282";
    }
  }};
`;

export const MyPoint = styled.div<{ myPageTapMenu: number }>`
  font-weight: ${(props) => {
    if (props.myPageTapMenu == 1) {
      return "700";
    } else {
      return "500";
    }
  }};

  color: ${(props) => {
    if (props.myPageTapMenu == 1) {
      return "black";
    } else {
      return "#828282";
    }
  }};
  margin: 8px 0;
`;

export const MyProfile = styled.div<{ myPageTapMenu: number }>`
  font-weight: ${(props) => {
    if (props.myPageTapMenu == 2) {
      return "700";
    } else {
      return "500";
    }
  }};

  color: ${(props) => {
    if (props.myPageTapMenu == 2) {
      return "black";
    } else {
      return "#828282";
    }
  }};
`;

export const Top_Wrapper = styled.div`
  padding: 56px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const TabMenu = styled.ul`
  font-weight: 400px;
  list-style: none;
  padding: 0;
`;

export const MyProduct = styled.li<{ subTabMenu: number }>`
  display: inline-block;
  padding-right: 12px;
  border-right: 1px solid #bdbdbd;
  color: ${(props) => (props.subTabMenu == 0 ? "#000000" : "#BDBDBD")};
`;

export const MyWish = styled.li<{ subTabMenu: number }>`
  display: inline-block;
  padding-left: 12px;
  color: #828282;
  color: ${(props) => (props.subTabMenu == 1 ? "#000000" : "#BDBDBD")};
`;

export const Search_Wrapper = styled.div``;

export const Input = styled.input`
  padding: 14px 48px;
  border: 1px solid #f2f2f2;
  margin-right: 24px;
  font-size: 16px;
  background: none;
`;

export const Button = styled.button`
  padding: 14px 24px;
  background: black;
  border: none;
  color: White;
  font-size: 16px;
`;

export const Point_history_Wrapper = styled.div``;

export const Point_Total = styled.span<{ subTabMenu: number }>`
  display: inline-block;
  padding-right: 12px;
  border-right: 1px solid #bdbdbd;
  color: ${(props) => (props.subTabMenu == 0 ? "#000000" : "#BDBDBD")};
`;

export const Point_Charge = styled.span<{ subTabMenu: number }>`
  display: inline-block;
  padding-left: 12px;
  padding-right: 12px;
  border-right: 1px solid #bdbdbd;
  color: ${(props) => (props.subTabMenu == 1 ? "#000000" : "#BDBDBD")};
`;

export const Point_Purchase = styled.span<{ subTabMenu: number }>`
  display: inline-block;
  padding-left: 12px;
  padding-right: 12px;
  border-right: 1px solid #bdbdbd;
  color: ${(props) => (props.subTabMenu == 2 ? "#000000" : "#BDBDBD")};
`;

export const Point_Sales = styled.span<{ subTabMenu: number }>`
  display: inline-block;
  padding-left: 12px;
  color: ${(props) => (props.subTabMenu == 3 ? "#000000" : "#BDBDBD")};
`;

export const SubTitle = styled.h2`
  margin-bottom: 40px;
`;

export const Password_Wrapper = styled.div<{ myPageTapMenu: number }>`
  width: 800px;
`;

export const CurrentPassword = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 14px 16px;
    width: 590px;
    height: 52px;
    border: none;
    background: #e0e0e0;
  }
`;

export const NewPassword = styled.div`
  margin-bottom: 20px;
  font-weight: 700;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 14px 16px;
    width: 590px;
    height: 52px;
    border: none;
    background: #e0e0e0;
  }
`;

export const NewPassword2 = styled.div`
  font-weight: 700;
  color: #4f4f4f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 14px 16px;
    width: 590px;
    height: 52px;
    border: none;
    background: #e0e0e0;
  }
`;

export const ChangePasswordButton = styled.button<{ active: boolean }>`
  background: ${(props) => {
    if (props.active) {
      return "#ffd600";
    } else {
      return "#bdbdbd";
    }
  }};
  margin-top: 40px;
  float: right;
  padding: 14px 45px;
  border: none;
  color: #4f4f4f;
`;
