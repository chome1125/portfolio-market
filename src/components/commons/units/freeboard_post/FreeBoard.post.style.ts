import styled from "@emotion/styled";

export const Inner = styled.section`
  margin: 101px 0;
  padding: 60px 100px 80px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 80px;
  font-size: 36px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Writer = styled.div`
  width: calc(100% / 2 - 12px);
  input {
    display: block;
    width: 100%;
    padding: 14px 16px;
    margin-top: 16px;
    border: 1px solid #bdbdbd;
  }
`;

export const WriterPassword = styled.div`
  width: calc(100% / 2 - 12px);
  input {
    display: block;
    width: 100%;
    padding: 14px 16px;
    margin-top: 16px;
    border: 1px solid #bdbdbd;
  }
`;

export const SubjectWrapper = styled.div`
  input {
    display: block;
    width: 100%;
    padding: 14px 16px;
    margin: 16px 0 40px;
    border: 1px solid #bdbdbd;
  }
`;

export const ContentsWrapper = styled.div`
  textarea {
    width: 100%;
    height: 480px;
    padding: 14px 16px;
    border: 1px solid #bdbdbd;
    margin: 16px 0;
  }
`;

export const AddressWrapper = styled.div`
  margin-bottom: 37px;
  input {
    border: 1px solid #bdbdbd;
  }

  > input {
    display: block;
    width: 100%;
    padding: 14px 16px;
    &:first-child {
      margin-bottom: 30px;
    }
  }
`;

export const Zipcode = styled.div`
  display: flex;
  height: 52px;
  margin: 16px 0;

  input {
    text-align: center;
    width: 77px;
    height: 100%;
  }

  button {
    width: 124px;
    height: 100%;
    margin-left: 16px;
    background: black;
    color: white;
    border: none;
  }
`;

export const YoutubeWrapper = styled.div`
  margin-bottom: 40px;
  input {
    display: block;
    padding: 14px 16px;
    width: 100%;
    margin-top: 16px;
    border: 1px solid #bdbdbd;
  }
`;

export const PhotoWrapper = styled.div`
  margin-bottom: 40px;
`;

export const PhotoBoxWrapper = styled.div`
  margin-top: 16px;
`;

export const PhotoBox = styled.img`
  margin-right: 24px;
`;

export const MainWrapper = styled.div``;

export const CheckBox = styled.span`
  display: block;
  margin: 16px 0 80px;
  input {
    margin-right: 8px;
    &:last-child {
      margin-left: 20px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const NewPostButton = styled.button`
  padding: 14px 60px;
  background: #ffd600;
  border: none;
`;

export const EditPostButtonWrapper = styled.div``;

export const EditCancleButton = styled.button`
  padding: 14px 60px;
  background: #bdbdbd;
  color: #4f4f4f;
  border: none;
  margin-right: 24px;
`;

export const EditButton = styled.button`
  padding: 14px 60px;
  background: #ffd600;
  border: none;
`;
