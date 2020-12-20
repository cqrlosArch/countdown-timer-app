import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  height:100vh;
  min-width: 360px;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 30vh 50vh 20vh;
  justify-items: center;
  justify-content:center;

  @media screen and (min-width: 576px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 95%;
  }

  @media screen and (min-width: 992px) {
    width: 90%;
  }

  @media screen and (min-width: 1200px) {
    width: 88%;
    max-width: 1440px;
  }
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
