import { useState } from 'react';

const useCountDown = (limitDate) => {
  const [days, setDays] = useState('08');
  const [hours, setHours] = useState('23');
  const [minutes, setMinutes] = useState('55');
  const [seconds, setSeonds] = useState('41');

  const countDown = (limitDate) => {
    // const $countDown=document.getElementById(id),
    const countDownDate = new Date(limitDate).getTime();

    let countDownTempo = setInterval(() => {
      let now = new Date().getTime(),
        limitTime = countDownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        hours = (
          '0' +
          Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).slice(-2),
        minutes = (
          '0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
        ).slice(-2),
        seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
          -2
        );

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeonds(seconds);

      if (limitTime < 0) {
        clearInterval(countDownTempo);
        alert('End')
      }
    }, 1000);
  };

  countDown(limitDate);

  return [days, hours, minutes, seconds];
};

export default useCountDown;
