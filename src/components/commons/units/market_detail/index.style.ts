import styled from "@emotion/styled";

export const Inner = styled.div`
  padding: 82px 0 205px;
`;

export const Detail_Wrapper = styled.div`
  width: 792px;
  margin: 0 auto;
`;

export const Contents_Wrapper = styled.div`
  padding: 20px 0 76px;
`;

export const ProductInfo_Wrapper = styled.div``;

export const Product_Name1 = styled.div`
  color: #bdbdbd;
  font-size: 18px;
  font-weight: 500;
`;

export const Product_Name2 = styled.div`
  color: #4f4f4f;
  font-weight: 700;
  font-size: 24px;
`;

export const Product_Price = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const Carousel_Wrapper = styled.div`
  width: 504px;
  height: 482px;
  background: gray;
  margin: 80px auto;
`;

export const Description_wrapper = styled.div`
  font-size: 18px;
  color: #4f4f4f;
  padding-bottom: 40px;
`;

export const HashTag = styled.div`
  color: #bdbdbd;
  margin-top: 40px;
`;

export const Map_Wrapper = styled.div`
  width: 100%;
  height: 360px;
  background: yellow;
  margin: 80px 0;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    background: #bdbdbd;
    position: absolute;
    top: -80px;
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    display: block;
    background: #bdbdbd;
    position: absolute;
    bottom: -80px;
  }
`;

export const Button_Wrapper = styled.div`
  text-align: center;
`;

export const Button1 = styled.button`
  padding: 14px 60px;
  background: #bdbdbd;
  border: none;
  cursor: pointer;
  margin-right: 24px;
  font-size: 16px;
`;

export const Button2 = styled.button`
  padding: 14px 60px;
  background: #ffd600;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;
