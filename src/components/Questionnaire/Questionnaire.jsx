import "./Questionnaire.scss";

const Questionnaire = ({ question, onClickVariants, step, questions }) => {
  const persentage = Math.round((step / questions.length) * 100);
  return (
    <section className="questionnaire">
      <h1 className="questionnaire__title">Опросник</h1>

      <div className="questionnaire__block">
        <div className="questionnaire__block-progress">
          <div
            style={{ width: `${persentage}%` }}
            className="questionnaire__block-progress-bar"
          ></div>
        </div>
        <h3 className="questionnaire__block-header">{question.title}</h3>

        <ul className="questionnaire__block-variants">
          {question.variants.map((variant, i) => (
            <li
              key={variant}
              onClick={() => onClickVariants(i)}
              className="questionnaire__block-variants-variant"
            >
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Questionnaire;
