import React from "react";
import Answer from "./Answer";

const AnswersList = ({ question, handleCheck, checking }) => {
  const incorrect = question.incorrect;
  const correct = question.correct;
  const first = incorrect.slice(0, question.correctIndex);
  const second = incorrect.slice(question.correctIndex, 3);
  const answersArray = [...first, correct, ...second];

  return (
    <div className="answers">
      {answersArray.map((a, index) => (
        <Answer
          question={question}
          answer={a}
          key={index}
          index={index}
          correctIndex={question.correctIndex}
          checkedAnswer={question.checkedAnswer}
          handleCheck={handleCheck}
          checking={checking}
        />
      ))}
    </div>
  );
};

export default AnswersList;
