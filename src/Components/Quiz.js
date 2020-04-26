import React, { Component } from "react";
import update from 'react-addons-update';
import AnswersList from "./AnswersList";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0,
      points: 0,
    };
  }

  handleAnswer(isCorrect) {
    console.log(isCorrect)
    this.setState(prevState => {
      return {
        questions: update(this.state.questions, {[prevState.currentQuestion]: {isCorrect: {$set: isCorrect}}}),
        currentQuestion: prevState.currentQuestion + 1,
        points: isCorrect ? prevState.points + 1 : prevState.points,
      };
    });
    console.log(this.state);
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
        <h2
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion].question,
          }}
        ></h2>
        <AnswersList
          incorrect={questions[currentQuestion]["incorrect_answers"]}
          correct={questions[currentQuestion]["correct_answer"]}
          handleAnswer={isCorrect =>
            this.handleAnswer(isCorrect)
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
