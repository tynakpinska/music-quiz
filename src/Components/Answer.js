import React from "react";

const Answer = ({
  index,
  checking,
  answer,
  checkedAnswer,
  correctIndex,
  handleCheck,
}) => {

  const handleClick = e => {
    handleCheck(index);
  };

  let style = {};

  if (checking) {
    if (index === checkedAnswer) {
      style = { background: "#D50000"};
    }
    if (index === correctIndex) {
      style = { background: "#63DB1C" };
    }
  } else {
    if (index === checkedAnswer) {
      style = { background: "#FFC551", color: "#441917" };
    }
  }

  return (
    <button
      className="answer"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: answer }}
      style={style}
    ></button>
  );
};

export default Answer;
