import styled from "@emotion/styled";

export const Inner = styled.div``;

export const Post_List_Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const ListInformation = styled.div`
  padding: 12px 0;
  display: inline-block;
  font-size: 18px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
`;

export const PostList = styled.div`
  border-top: 1px solid #bdbdbd;
  display: flex;
  padding: 12px 0;
  color: #4f4f4f;
  position: relative;
`;

export const Number = styled.div<{ subTabMenu?: number; freeBoard?: boolean }>`
  display: inline-block;
  text-align: center;
  width: ${(props) => {
    if (props.subTabMenu == 0) {
      return "10%";
    } else if (props.subTabMenu == 1) {
      return "10%";
    } else if (props.freeBoard) {
      return "10%";
    }
  }};
`;

export const Post_Title = styled.div<{ freeBoard?: boolean }>`
  display: inline-block;
  width: ${(props) => {
    if (props.freeBoard) {
      return "60%";
    }
  }};
  text-align: center;
  position: relative;
`;

export const Post_Writer = styled.div<{ freeBoard?: boolean }>`
  display: inline-block;
  width: ${(props) => {
    if (props.freeBoard) {
      return "15%";
    }
  }};
  text-align: center;
`;

export const Product_Name = styled.div<{ subTabMenu?: number }>`
  display: inline-block;
  text-align: center;
  position: relative;
  width: ${(props) => {
    if (props.subTabMenu == 0) {
      return "50%";
    } else if (props.subTabMenu == 1) {
      return "45%";
    } else {
      return "15%";
    }
  }};
`;

export const Product_Price = styled.div<{
  subTabMenu?: number;
  freeBoard?: boolean;
}>`
  display: inline-block;
  text-align: center;
  width: ${(props) => {
    if (props.subTabMenu == 0) {
      return "20%";
    } else if (props.subTabMenu == 1) {
      return "15%";
    } else {
      return "15%";
    }
  }};
`;

export const Seller = styled.span<{
  myPageTapMenu?: number;
  subTabMenu?: number;
}>`
  display: inline-block;
  text-align: center;
  width: ${(props) => {
    if (props.myPageTapMenu == 1 && props.subTabMenu == 2) {
      return "calc(50% / 3)";
    }
    if (props.subTabMenu == 0) {
      return "10%";
    }
    if (props.subTabMenu == 1) {
      return "15%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 3) {
      return "20%";
    }
  }};
`;

export const Date = styled.div<{
  subTabMenu?: number;
  freeBoard?: boolean;
  myPageTapMenu?: number;
}>`
  display: inline-block;
  text-align: center;
  width: ${(props) => {
    if (props.myPageTapMenu == 0 && props.subTabMenu == 0) {
      return "20%";
    }
    if (props.myPageTapMenu == 0 && props.subTabMenu == 1) {
      return "15%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 0) {
      return "25%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 1) {
      return "25%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 2) {
      return "20%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 3) {
      return "20%";
    }
    if (props.freeBoard) {
      return "15%";
    }
  }};
`;

export const SoldOut = styled.span<{ subTabMenu?: number }>`
  color: #ffd600;
  position: absolute;
  top: 0;
  right: ${(props) => {
    if (props.subTabMenu == 0) {
      return "30px";
    } else if (props.subTabMenu == 1) {
      return "20px";
    }
  }};
`;

export const Contents = styled.span<{
  ex1?: string;
  ex2?: string;
  ex3?: string;
  subTabMenu?: number;
  myPageTapMenu?: number;
}>`
  font-weight: 700;
  display: inline-block;
  text-align: center;
  width: ${(props) => {
    if (props.myPageTapMenu == 1 && props.subTabMenu == 2) {
      return "30%";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 3) {
      return "40%";
    } else {
      return "25%";
    }
  }};
  color: ${(props) => {
    if (props.ex1 == "충전") {
      return "#0031e0";
    }
    if (props.ex2 == "구매") {
      return "#FFD600";
    }
    if (props.ex3 == "판매") {
      return "#FFD600";
    }
  }};
`;

export const History = styled.span<{
  subTabMenu?: number;
  myPageTapMenu?: number;
}>`
  display: inline-block;
  text-align: center;
  font-weight: 700;
  width: ${(props) => {
    if (props.myPageTapMenu == 1 && props.subTabMenu == 2) {
      return "calc(50% / 3)";
    }
    if (props.myPageTapMenu == 1 && props.subTabMenu == 3) {
      return "20%";
    } else {
      return "25%";
    }
  }};
`;

export const Balance = styled.span<{
  subTabMenu?: number;
  myPageTapMenu?: number;
}>`
  display: inline-block;
  font-weight: 700;
  text-align: center;
  width: ${(props) => {
    if (props.myPageTapMenu == 1 && props.subTabMenu == 2) {
      return "calc(50% / 3)";
    } else {
      return "25%";
    }
  }};
`;

export const PaymentID = styled.span<{ subTabMenu?: number }>`
  display: inline-block;
  font-weight: 700;
  text-align: center;
  width: 25%;
`;

export const List_PageNation = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Arrow_Left = styled.img``;
export const Arrow_Right = styled.img``;
