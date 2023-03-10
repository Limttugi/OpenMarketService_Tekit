import styled from 'styled-components';
import ProductQuantityButton from 'components/_Atoms/Button/ProductQuantityButton';
import MButton from 'components/_Atoms/Button/Size/Medium/M-Button';
import MDarkButton from 'components/_Atoms/Button/Size/Medium/M-Dark-Button';
import { ProductImageInDetailPage } from 'components/_Atoms/Image/ProductImage';
import ProductNamePriceText from 'components/_Atoms/Text/ProductNamePriceText';
import ProductTotalQuantityPriceText from 'components/_Atoms/Text/ProductTotalQuantityPriceText';
import { useRecoilValue } from 'recoil';
import { handleGetProductDetail } from 'recoil/selectors/product';

const ProductBriefDescription = () => {
  const productDetail = useRecoilValue(handleGetProductDetail);

  return (
    <>
      <Container>
        <ProductImageInDetailPage image={productDetail.image} />
        <RightContainer>
          <ProductNamePriceText
            storeName={productDetail.store_name}
            productName={productDetail.product_name}
            price={productDetail.price}
            page='/detail'
          />
          <DeliveryText>택배배송 / 무료배송</DeliveryText>
          <DividingLine />
          <ProductQuantityButton />
          <DividingLine />
          <ProductTotalQuantityPriceText price={productDetail.price} />
          <ButtonContainer>
            <MButton text='바로 구매' width='41.6rem' />
            <MDarkButton text='장바구니' width='20rem' />
          </ButtonContainer>
        </RightContainer>
      </Container>
    </>
  );
};

export default ProductBriefDescription;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 5rem;
`;

const DeliveryText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #767676;
  margin: 13.8rem 0 2rem 0;
`;

const DividingLine = styled.hr`
  border: none;
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
  &:nth-of-type(2) {
    margin-bottom: 3.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
