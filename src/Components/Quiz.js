import React, { Component } from "react";
import update from "react-addons-update";
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

  handleAnswer = isCorrect => {
    console.log(isCorrect);
    this.setState(prevState => {
      return {
        questions: update(this.state.questions, {
          [prevState.currentQuestion]: { isCorrect: { $set: isCorrect } },
        }),
        points: isCorrect ? prevState.points + 1 : prevState.points,
      };
    });
    console.log(this.state);
  };

  handleNext = () => {
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion++,
      };
    });
  };

  handleCheckAnswers = () => {
    this.setState({ currentQuestion: 0 });
  };

  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
    )
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          questions: [
            ...resp.results.map(q => {
            return {
              question: q["question"],
              incorrect: q["incorrect_answers"],
              correct: q["correct_answer"],
              correctIndex: Math.floor(Math.random() * 4)
            };
          })],
        });
      })
      .catch(err => {
        console.log(err, "Unable to fetch questions");
      });
  }

  render({ questions, currentQuestion, correctIndex } = this.state) {
    return currentQuestion !== 10 ? (
      questions[currentQuestion] ? (
        <div className="quiz">
          <h2
            dangerouslySetInnerHTML={{
              __html: questions[currentQuestion].question,
            }}
          ></h2>
          <AnswersList
            question={questions[currentQuestion]}
            handleAnswer={isCorrect => this.handleAnswer(isCorrect)}
          />
          <p>{currentQuestion + 1}/10</p>
          <button className="nextBtn" onClick={this.handleNext}>
            Next
          </button>
        </div>
      ) : (
        <div></div>
      )
    ) : (
      <div className="quiz">
        <p>Score: {this.state.points}/10</p>
        <button onClick={this.handleCheckAnswers}>Check answers</button>
      </div>
    );
  }
}

export default Quiz;
