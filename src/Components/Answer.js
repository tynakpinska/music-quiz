import React from "react";

const Answer = props => {
  const handleClick = e => {
    props.handleCheck(props.index);
  };

  let style = {};

  if (props.checking) {
    if (props.index === props.checkedAnswer) {
      style = { background: "#D50000", border: "3px solid #FFC551" };
    }
    if (props.index === props.correctIndex) {
      style = { background: "#63DB1C" };
    }
  } else {
    if (props.index === props.checkedAnswer) {
      style = { background: "#004F4F", border: "3px solid #FFC551" };
    }
  }

  return (
    <button
      className="answer"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: props.answer }}
      style={style}
    ></button>
  );
};

export default Answer;
