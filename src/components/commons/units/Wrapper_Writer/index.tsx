import * as S from "./index.style";

export default function WriterWrapper(props) {
  return (
    <S.Writer_Wrapper>
      <S.WriterInfoWrapper>
        <S.Photo src="../../ic_profile.png" MarketDetail={props.MarketDetail} />
        <S.ProfileWrapper>
          <S.Name MarketDetail={props.MarketDetail}>노원두</S.Name>
          <S.Date MarketDetail={props.MarketDetail}>Date: 2021.02.18</S.Date>
        </S.ProfileWrapper>
      </S.WriterInfoWrapper>
      <S.IconWrapper>
        <S.Button_LinkShare
          MarketDetail={props.MarketDetail}
          src="../../ic_link-32px.png"
        />
        <S.Button_LocationShare
          MarketDetail={props.MarketDetail}
          src="../../ic_location_on-32px.png"
        />
      </S.IconWrapper>
    </S.Writer_Wrapper>
  );
}
