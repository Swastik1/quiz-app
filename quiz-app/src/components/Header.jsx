import logo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="quiz-logo" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
