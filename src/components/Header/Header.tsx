import styled from 'styled-components';

import Logo from 'img/Logo-hodu.png';
import ProductionSearchBox from 'components/Input/ProductionSearchBox';
import HeaderImageButton from 'components/Button/HeaderImageButton';
import ShoppingCartSvg from 'img/icon-shopping-cart.svg';
import MyPageSvg from 'img/icon-user.svg';
import ShoppingCartActiveSvg from 'img/icon-shopping-cart-2.svg';
import MyPageActiveSvg from 'img/icon-user-2.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <HeaderContainer>
      <Link to='/'>
        <LogoImg src={Logo} alt='logo' />
      </Link>
      <ProductionSearchBox />
      <>
        {pathname === '/cart' ? (
          <HeaderImageButton imageSrc={ShoppingCartActiveSvg} text='장바구니' href='/cart' active={true} />
        ) : (
          <HeaderImageButton imageSrc={ShoppingCartSvg} text='장바구니' href='/cart' />
        )}
        {pathname === '/mypage' ? (
          <HeaderImageButton imageSrc={MyPageActiveSvg} text='마이페이지' href='/mypage' active={true} />
        ) : (
          <HeaderImageButton imageSrc={MyPageSvg} text='마이페이지' href='/mypage' />
        )}
      </>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 32rem;
  width: 100%;
  height: 9rem;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const LogoImg = styled.img`
  width: 12.4rem;
  height: 3.8rem;
  margin-right: 3rem;
  cursor: pointer;
`;

export default Header;