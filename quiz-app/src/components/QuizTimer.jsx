import { useEffect, useState } from "react";

const QuizTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuizTimer;
