import React from "react";

const Answer = props => {
  const handleClick = e => {
    props.index === props.correctIndex
      ? props.handleAnswer(true)
      : props.handleAnswer(false);
  };

  return (
    <button
      className="answer"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: props.answer }}
    ></button>
  );
};

export default Answer;
