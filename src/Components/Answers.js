import React from "react";
import Answer from "./Answer";

const Answers = props => {
  const incorrect = props.incorrect;
  const answersArray = incorrect;
  const correct = props.correct;
  const correctIndex = Math.floor(Math.random() * 4);
  answersArray.splice(correctIndex, 0, correct);

  return (
    <div className="questions">
      {answersArray.map((a, index) => (
        <Answer
          answer={a}
          key={index}
          index={index}
          correctIndex={correctIndex}
          changeCurrentQuestion={props.changeCurrentQuestion}
        />
      ))}
    </div>
  );
};

export default Answers;
