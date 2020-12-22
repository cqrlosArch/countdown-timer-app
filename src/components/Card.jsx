import styled from 'styled-components';
import React from 'react';

const CardStyled = styled.div`
  min-width: 150px;
  height: 140px;
  background-color: ${({ theme }) => theme.bgcard};
  box-shadow: 1px 13px 5px -1px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    min-width: 70px;
    width: auto;
    min-height: 80px;
    height: auto;
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: ${({ theme }) => theme.shadow};
    left: 0;
    z-index: 5;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    z-index: 5;
    position: absolute;
    background-color: ${({ theme }) => theme.shadow};
    right: 0;
    border-radius: 50%;
    transform: translateX(50%);
  }

  .curtain {
    align-self: flex-start;
    height: 50%;
    width: 100%;
    background-color: ${({ theme }) => theme.curtain};
    position: relative;
    @media screen and (max-width: 576px) {
      width: 100%;
      min-height: 40px;
    }

    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 150px;
      z-index: 1;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 576px) {
        min-width: 70px;
        width: auto;
      }
    }
  }

  .number {
    color: ${({ theme }) => theme.number};
    position: absolute;
    font-size: 6.2rem;
    @media screen and (max-width: 576px) {
      font-size: 3rem;
    }
  }
 
`;

const Card = React.memo(({ number, changed }) => {
  return (
    <CardStyled changed={changed}>
      <div className="curtain"></div>
      <p className="number">{number}</p>
    </CardStyled>
  );
});

export default Card;
