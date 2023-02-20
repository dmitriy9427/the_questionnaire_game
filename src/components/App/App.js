import React, { useState } from "react";
// import Counter from "../Counter/Counter";
// import Modal from "../Modal/Modal";
// import TimeOfDay from "../TimesOfDay/TimeOfDay";
import Questionnaire from "../Questionnaire/Questionnaire";
import QuestionnaireResult from "../QuestionnaireResult/QuestionnaireResult";
import questions from "../../utils/constants";
import "./App.scss";
import "../Counter/Counter.scss";
import "../Modal/Modal.scss";

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
      {/* <Counter />
      <Modal title="Губка">
        <h3>Губка боб танцует</h3>
      </Modal>
      <TimeOfDay /> */}
    </div>
  );
}

export default App;
