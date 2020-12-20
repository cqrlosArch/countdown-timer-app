import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    text-align:center;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1 className="title">we're launching soon</h1>
    </HeaderStyled>
  );
};

export default Header;
