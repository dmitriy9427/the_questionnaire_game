import React, { useState } from "react";
// import Counter from "../Counter/Counter";
import "./App.scss";
// import "./components/Counter/Counter.scss";
// import "./components/Modal/Modal.scss";
// import Modal from "../Modal/Modal";
// import TimeOfDay from "../TimesOfDay/TimeOfDay";
import Questionnaire from "../Questionnaire/Questionnaire";
import QuestionnaireResult from "../QuestionnaireResult/QuestionnaireResult";
const questions = [
  {
    title: "React - это ... ?",
    variants: ["фреймворк", "библиотека", "приложение"],
    correct: 1,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 2,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 3,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariants = (i) => {
    setStep(step + 1);
    if (i + 1 === question.correct) {
      console.log(true);
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {/* <Counter />
      <Modal title="Губка">
        <h3>Губка боб танцует</h3>
      </Modal>
      <TimeOfDay /> */}
      {step !== questions.length ? (
        <Questionnaire
          question={question}
          questions={questions}
          onClickVariants={onClickVariants}
          step={step}
        />
      ) : (
        <QuestionnaireResult correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
