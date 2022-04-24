import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  background-color: var(--gray_default_900);
  color: var(--white_default);
`

export const LayerOne = styled.div`
  padding: 8px 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  color: var(--gray_default_300);
`

export const FindStoreAndSupport = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  font-family: 'Inter-Regular';
`

export const FindStoreContainer = styled.div`
  display: flex;

  >span {
    padding: 0 32px 0 8px;
  }
`

export const SupportContainer = styled.div`
  display: flex;

  >span {
    padding: 0 32px 0 8px;
  }
`

export const ContactAndTrackOrder = styled.div`
  display: flex;
  gap: 16px;
  font-family: 'Inter-Medium';
`

export const Line = styled.hr`
  border: 0.1px solid var(--gray_default_700);
`

export const ContactContainer = styled.div`
`

export const TrackContainer = styled.div`
`

export const LayerTwo = styled.div`
  padding: 24px 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter-Regular';
  color: var(--gray_default_100);
`

export const LogoContainer = styled.div`
  
`

export const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  border: 0.1px solid var(--gray_default_700);
  border-radius: 5px;
`

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 17px;
  border-right: 0.1px solid var(--gray_default_700);

  &:hover {
    cursor: pointer;
  }

  >span {
    padding-right: 10px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  &>input {
    padding: 13px;
    width: 500px;
    color: white;
    background: transparent;
    border: none;
    font-size: 16px;
    line-height: 24px;
    font-family: 'Inter-Regular';

    &:focus {
      outline: none;
    }

    &::placeholder{
      color: var(--gray_default_500);
    }
  }
`

export const  ButtonContainer = styled.div`
  background-color: var(--red_default_500);
  border-radius: 0 5px 5px 0;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const UserContainer = styled.div`
`

export const RepeatContainer = styled.div`
`

export const HeartContainer = styled.div`
`

export const CartContainer = styled.div`
`

export const LayerThree = styled.div`
  background-color: white;
  padding: 0 10vw;
  display: flex;
  justify-content: space-between;
`

export const DepartmentsAndPageLinks = styled.div`
  display: flex;
  gap: 40px;
`

export const DepartmentsDropdownContainer = styled.div`
  background-color: var(--red_default_500);
  padding: 11px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter-Regular';

  &:hover {
    cursor: pointer;
  }

  >span {
    padding: 0 32px 0 8px;
  }
`

export const PageLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter-Regular';

  >a{
    color: var(--gray_default_500);
  }
  color: var(--gray_default_500);
`

export const NavLink = styled(Link)`
`

export const ShopContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  >span {
    padding-right: 8px;
  }
`

export const FeaturedContainer = styled.div`
  display: flex;
  align-items: center;
  
  &:hover {
    cursor: pointer;
  }

  >span {
    padding-right: 8px;
  }
`


export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;

  >span {
    padding-left: 8px;
  }
`

export const CurrencyAndLanguage = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  color: var(--gray_default_500);
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter-Regular';
`

export const CurrencyContainer = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`

export const LanguageContainer = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`