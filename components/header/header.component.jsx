import Image from 'next/image'
import {Container, LayerOne, LayerThree, LayerTwo, FindStoreAndSupport, FindStoreContainer, SupportContainer, ContactAndTrackOrder, ContactContainer, TrackContainer, Line, LogoContainer, SearchContainer, DropdownContainer, InputContainer,  ButtonContainer, UserContainer, IconsContainer, RepeatContainer, HeartContainer, CartContainer, DepartmentsAndPageLinks, DepartmentsDropdownContainer, PageLinks, NavLink, ShopContainer, FeaturedContainer, PromotionContainer,  CurrencyAndLanguage, CurrencyContainer, LanguageContainer } from './header.styles.jsx'

import FindStoreIcon from '../../public/images/icons/location.svg'
import SupportIcon from '../../public/images/icons/mail.svg'
import LineIcon from '../../public/images/icons/line.svg'
import DownArrowIconWhite from '../../public/images/icons/chevron-down-white.svg'
import SearchIcon from '../../public/images/icons/search.svg'
import UserIcon from '../../public/images/icons/user.svg'
import RepeatIcon from '../../public/images/icons/repeat.svg'
import HeartIcon from '../../public/images/icons/heart.svg'
import CartIcon from '../../public/images/icons/cart.svg'
import MenuIcon from '../../public/images/icons/menu.svg'
import DownArrowIconBlack from '../../public/images/icons/chevron-down-black.svg'
import GiftIcon from '../../public/images/icons/gift.svg'

import Logo from '../../public/images/Logo.svg'

const Header = () => {
  return (
    <Container>
      <LayerOne>
        <FindStoreAndSupport>
          <FindStoreContainer>
            <Image src={FindStoreIcon} alt="find-store"/>
            <span>Find Store</span>
          </FindStoreContainer>
          <SupportContainer>
            <Image src={SupportIcon} alt="find-store"/>
            <span>support@vestirmart.com</span>
          </SupportContainer>
        </FindStoreAndSupport>
        <ContactAndTrackOrder>
          <ContactContainer>
            Contact
          </ContactContainer>
          <Image src={LineIcon} alt="find-store"/>
          <TrackContainer>
            Track Your Order
          </TrackContainer>
        </ContactAndTrackOrder>
      </LayerOne>

      <Line/>

      <LayerTwo>
        <LogoContainer>
          <Image src={Logo} alt="find-store"/>
        </LogoContainer>
        <SearchContainer>
          <DropdownContainer>
            <span>All Categories</span>
            <Image src={DownArrowIconWhite} alt="find-store"/>
          </DropdownContainer>
          <InputContainer>
            <input placeholder='Search products here...'/>
            <ButtonContainer>
              <Image src={SearchIcon} alt="find-store"/>
            </ButtonContainer>
          </InputContainer>
        </SearchContainer>
        <IconsContainer>
          <UserContainer>
            <Image src={UserIcon} alt="find-store"/>
          </UserContainer>
          <RepeatContainer>
            <Image src={RepeatIcon} alt="find-store"/>
          </RepeatContainer>
          <HeartContainer>
            <Image src={HeartIcon} alt="find-store"/>
          </HeartContainer>
          <CartContainer>
            <Image src={CartIcon} alt="find-store"/>
          </CartContainer>
        </IconsContainer>
      </LayerTwo>

      <LayerThree>
        <DepartmentsAndPageLinks>
          <DepartmentsDropdownContainer>
            <Image src={MenuIcon} alt="find-store"/>
            <span>All Departments</span>
            <Image src={DownArrowIconWhite} alt="find-store"/>
          </DepartmentsDropdownContainer>
          <PageLinks>
            <NavLink href='#'>
              Home
            </NavLink>
            <ShopContainer>
              <span>Shop</span>
              <Image src={DownArrowIconBlack} alt="find-store"/>
            </ShopContainer>
            <FeaturedContainer>
              <span>Featured</span>
              <Image src={DownArrowIconBlack} alt="find-store"/>
            </FeaturedContainer>
            <NavLink href='#'>
              About Us
            </NavLink>
            <NavLink href='#'>
              Blog
            </NavLink>
            <PromotionContainer>
              <Image src={GiftIcon} alt="find-store"/>
              <span>Promotion</span>
            </PromotionContainer>
          </PageLinks>
        </DepartmentsAndPageLinks>
        <CurrencyAndLanguage>
          <CurrencyContainer>
            <span>&#8373; GHS</span>
            <Image src={DownArrowIconBlack} alt="icon"/>
          </CurrencyContainer>
          <Image src={LineIcon} alt="find-store"/>
          <LanguageContainer>
            <span>English</span>
            <Image src={DownArrowIconBlack} alt="icon"/>
          </LanguageContainer>
        </CurrencyAndLanguage>
      </LayerThree>
    </Container>
  )
}

export default Header;