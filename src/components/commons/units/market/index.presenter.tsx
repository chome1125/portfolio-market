import * as S from "./index.style";

export default function MarketUI(): JSX.Element {
  return (
    <S.Inner>
      <S.Title>베스트 상품</S.Title>
      <S.BestSellerWrapper>
        <S.CardWrapper>
          <S.Card>
            <S.Image></S.Image>
            <S.ProductInformation>
              <S.Text>
                <p>삼성전자 갤럭시탭A 10.1</p>
                <span>2019 LTE 32GB</span>
                <strong>240,120원</strong>
              </S.Text>
              <S.Like></S.Like>
            </S.ProductInformation>
          </S.Card>
          <S.Card>
            <S.Image></S.Image>
            <S.ProductInformation>
              <S.Text>
                <p>삼성전자 갤럭시탭A 10.1</p>
                <span>2019 LTE 32GB</span>
                <strong>240,120원</strong>
              </S.Text>
              <S.Like></S.Like>
            </S.ProductInformation>
          </S.Card>
          <S.Card>
            <S.Image></S.Image>
            <S.ProductInformation>
              <S.Text>
                <p>삼성전자 갤럭시탭A 10.1</p>
                <span>2019 LTE 32GB</span>
                <strong>240,120원</strong>
              </S.Text>
              <S.Like></S.Like>
            </S.ProductInformation>
          </S.Card>
          <S.Card>
            <S.Image></S.Image>
            <S.ProductInformation>
              <S.Text>
                <p>삼성전자 갤럭시탭A 10.1</p>
                <span>2019 LTE 32GB</span>
                <strong>240,120원</strong>
              </S.Text>
              <S.Like></S.Like>
            </S.ProductInformation>
          </S.Card>
        </S.CardWrapper>
      </S.BestSellerWrapper>
      <S.ProductList_Wrapper>
        <S.MenuWrapper>
          <S.TabMenu_Wrapper>
            <S.Sale_Product>판매중상품</S.Sale_Product>
            <S.SoldOut_Product>판매된상품</S.SoldOut_Product>
          </S.TabMenu_Wrapper>
          <S.SearchInput />
          <S.Date type="date" />
          <S.SearchButton>검색</S.SearchButton>
        </S.MenuWrapper>
        <S.ProductWrapper>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
          <S.Product>
            <S.Product_Image />
            <S.Product_info>
              <S.Product_Name>삼성전자 갤럭시탭A 10.1</S.Product_Name>
              <S.Product_Description>2019 LTE 32GB</S.Product_Description>
              <S.Product_HashTag>#삼성전자 #갤럭시탭 #갓성비</S.Product_HashTag>
              <S.SelllerWrapper>
                <S.Seller>판매자</S.Seller>
                <S.Seller_Like>20</S.Seller_Like>
              </S.SelllerWrapper>
            </S.Product_info>
            <S.Product_Price>240,120원</S.Product_Price>
          </S.Product>
        </S.ProductWrapper>
      </S.ProductList_Wrapper>
    </S.Inner>
  );
}
