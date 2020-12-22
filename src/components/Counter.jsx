import { useContext } from 'react';
import styled from 'styled-components';
import TimeContext from '../context/TimeContext';
import Card from './Card';

const CounterStyled = styled.div`
  width: 60%;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 0.5rem;

  .text {
    font-size: 11px;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.text};
    width: inherit;
    text-align: center;
    margin-top: 2rem;
    @media screen and (max-width: 576px) {
      font-size: 8px;
      letter-spacing: 0.2rem;
    }
  }
`;

const Counter = () => {
  const { days, hours, minutes, seconds } = useContext(TimeContext);

  return (
    <CounterStyled>
      <div>
        <Card number={days} />
        <p className="text">DAYS</p>
      </div>
      <div>
        <Card number={hours} />
        <p className="text">HOURS</p>
      </div>
      <div>
        <Card number={minutes} />
        <p className="text">MINUTES</p>
      </div>
      <div>
        <Card number={seconds} />
        <p className="text">SECONDS</p>
      </div>
    </CounterStyled>
  );
};

export default Counter;
