import QuizTimer from "./QuizTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({
  questionText,
  answers,
  selectedAnswer,
  answerState,
  onSelect,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeOut={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
}
