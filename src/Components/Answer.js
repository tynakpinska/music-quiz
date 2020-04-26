import React from "react";

const Answer = props => {

  const handleClick = e => {
    if (props.question.isCorrect === undefined) {
      e.target.style.border = "4px solid yellow";
      if (props.index === props.correctIndex) {
        props.handleAnswer(true);
      } else {
        props.handleAnswer(false);
      }

    }

  };

  return (
    <button
      className="answer"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: props.answer }}
      style={props.question.isCorrect === "false" ? {background: "#D50000"} : {background: "#008080"}}
    ></button>
  );
};

export default Answer;
