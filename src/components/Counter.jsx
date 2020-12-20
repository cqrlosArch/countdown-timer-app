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
  gap:.5rem;
`;

const Counter = () => {
  const { days, hours, minutes, seconds } = useContext(TimeContext);

  return (
    <CounterStyled>
      <Card number={days} />
      <Card number={hours} />
      <Card number={minutes} />
      <Card number={seconds} />
    </CounterStyled>
  );
};

export default Counter;
