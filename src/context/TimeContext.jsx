import { createContext } from 'react';
import useCountDown from '../hooks/useCountDown';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [days, hours, minutes, seconds] = useCountDown(
    'January 01, 2021 00:00:00'
  );

  const data = { days, hours, minutes, seconds };

  return <TimeContext.Provider value={data}>{children}</TimeContext.Provider>;
};

export { TimeProvider };
export default TimeContext;
