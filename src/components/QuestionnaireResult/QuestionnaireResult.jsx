import tada from "../../images/pervoe.png";
import "./QuestionnaireResult.scss";

const QuestionnaireResult = ({ correct, questions }) => {
  return (
    <section className="result">
      <div className="result__window">
        <img src={tada} alt="" className="result__image" />
        <h4 className="result__info">
          Вы отгадали {correct} ответа от {questions.length}
        </h4>
        <a href="/">
          <button type="submit" className="result__resume">
            Попробовать снова
          </button>
        </a>
      </div>
    </section>
  );
};
export default QuestionnaireResult;
