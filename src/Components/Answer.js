import React from "react";

const Answer = props => {
  const handleClick = e => {
    e.target.style.backgroundColor = "#05FFFF";
    props.index === props.correctIndex ? console.log("correct") : console.log("incorrect");
    props.changeCurrentQuestion();
  }

  return (
    <button className="answer" onClick={handleClick}>
        {props.answer}
    </button>
  );
};

export default Answer;
