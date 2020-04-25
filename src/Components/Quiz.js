import React, { Component } from "react";
import Answers from "./Answers";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      currentQuestion: 0,
    };
  }

  changeCurrentQuestion(prevState) {
    this.setState(prevState => {
      return { currentQuestion: prevState.currentQuestion + 1 };
    });
  }

  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
    )
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ questions: resp.results });
      })
      .catch(err => {
        console.log(err, "Unable to fetch questions");
      });
  }

  render({ questions, currentQuestion } = this.state) {
    return questions[currentQuestion] ? (
      <div className="quiz">
        <h2>{decodeURI(questions[currentQuestion].question)}</h2>
        <Answers
          incorrect={questions[currentQuestion]["incorrect_answers"]}
          correct={questions[currentQuestion]["correct_answer"]}
          changeCurrentQuestion={prevState =>
            this.changeCurrentQuestion(prevState)
          }
        />
        <p>{currentQuestion + 1}/10</p>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default Quiz;
