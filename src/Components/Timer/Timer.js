import React, { useEffect, useState } from "react";

const Timer = ({ setStop, question }) => {
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (timer === 0) return setStop(true);
    setInterval(() => {
      setTimer((previous) => previous - 1);
    }, 1000);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(10);
  }, [question]);

  return <div className="timer">{timer}</div>;
};

export default Timer;
