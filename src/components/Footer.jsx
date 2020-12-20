import styled from 'styled-components';
import IconSocial from './IconSocial';

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 576px) {
    width: 70%;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <IconSocial icon={'fa fa-facebook-official'} size={'30px'} />
      <IconSocial icon={'fa fa-pinterest'} size={'2rem'} />
      <IconSocial icon={'fa fa-instagram'} size={'2rem'} />
    </FooterStyled>
  );
};

export default Footer;
