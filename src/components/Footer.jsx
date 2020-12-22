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
  position: relative;
  .author {
    width: 400px;
    text-align: center;
    position: absolute;
    bottom: 0;
    transform: translateY(15%);
    font-size: 11px;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.text};
    @media screen and (max-width: 576px) {
      font-size: 9px;
    }
  }
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
      <p className="author">Carlos Diaz @frontendmentor.io</p>
    </FooterStyled>
  );
};

export default Footer;
