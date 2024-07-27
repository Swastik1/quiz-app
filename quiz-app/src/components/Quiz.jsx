import { useState, useCallback, useRef } from "react";
import questions from "../questions";
import quizCompleteLogo from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectedAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");

      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (answerState === questions[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, 1000);

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  const quizIsComplete = activeQuestionIndex === questions.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Trophy Icon" />
        <h2>Quiz is Complete </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={questions[activeQuestionIndex].text}
        answers={questions[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
