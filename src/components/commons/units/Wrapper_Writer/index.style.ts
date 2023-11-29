import styled from "@emotion/styled";

export const Writer_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const WriterInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Photo = styled.img<{ MarketDetail: boolean }>`
  margin-right: 12px;
  width: 56px;
  height: 56px;
  width: ${(props) => (props.MarketDetail ? "48px" : "")};
  height: ${(props) => (props.MarketDetail ? "48px" : "")};
`;

export const ProfileWrapper = styled.div``;

export const Name = styled.h3<{ MarketDetail: boolean }>`
  font-size: 24px;
  font-size: ${(props) => (props.MarketDetail ? "16px" : "24px")};
`;

export const Date = styled.p<{ MarketDetail: boolean }>`
  color: #828282;
  font-size: ${(props) => (props.MarketDetail ? "12px" : "16px")};
`;

export const IconWrapper = styled.div``;

export const Button_LinkShare = styled.img<{ MarketDetail: boolean }>`
  margin-right: 20px;
  width: 32px;
  height: 32px;
  width: ${(props) => (props.MarketDetail ? "24px" : "")};
  height: ${(props) => (props.MarketDetail ? "24px" : "")};
`;

export const Button_LocationShare = styled.img<{ MarketDetail: boolean }>`
  width: 32px;
  height: 32px;
  width: ${(props) => (props.MarketDetail ? "24px" : "")};
  height: ${(props) => (props.MarketDetail ? "24px" : "")};
`;
