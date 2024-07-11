import { useState } from "react";
import questions from "../questions";
import quizCompleteLogo from "../assets/quiz-complete.png";
import QuizTimer from "./QuizTimer";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectedAnswer = (selectedAnswer) => {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  };

  const quizIsComplete = activeQuestionIndex === questions.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Trophy Icon" />
        <h2>Quiz is Complete </h2>
      </div>
    );
  }

  const shuffledAnswers = [...questions[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <QuizTimer
          timeout={10000}
          onTimeOut={() => handleSelectedAnswer(null)}
        />
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
