import styled from "@emotion/styled";

export const Inner = styled.div`
  margin: 80px 0 419px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
`;

export const BestPostList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Card = styled.div`
  width: calc(100% / 4 - 12px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.16);
`;

export const Image = styled.div`
  height: 120px;
  background: gray;
`;

export const BestInformation = styled.div`
  padding: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const BestInformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const Left = styled.div``;

export const Profile = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Writer = styled.div`
  margin-left: 4px;
`;

export const Date = styled.span`
  font-size: 12px;
`;

export const LikeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeImage = styled.img`
  display: block;
  margin-bottom: 4px;
`;

export const LikeNumber = styled.strong``;

export const SearchWrapper = styled.div`
  margin: 80px 0 40px;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 776px;
  height: 52px;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding-left: 48px;
  margin-right: 42px;
`;

export const SearchDate = styled.input`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 44px;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  padding: 14px 0 16px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
`;
