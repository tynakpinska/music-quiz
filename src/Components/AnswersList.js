import React from "react";
import Answer from "./Answer";

const AnswersList = props => {
  const incorrect = props.question.incorrect;
  const correct = props.question.correct;
  const first = incorrect.slice(0, props.question.correctIndex);
  const second = incorrect.slice(props.question.correctIndex, 3);
  const answersArray = [...first, correct, ...second];

  return (
    <div className="questions">
      {answersArray.map((a, index) => (
        <Answer
        question={props.question}
          answer={a}
          key={index}
          index={index}
          correctIndex={props.question.correctIndex}
          checkedAnswer={props.question.checkedAnswer}
          handleCheck={props.handleCheck}
          checking={props.checking}
        />
      ))}
    </div>
  );
};

export default AnswersList;
