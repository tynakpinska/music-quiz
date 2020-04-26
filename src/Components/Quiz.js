import React, { Component } from "react";
import AnswersList from "./AnswersList";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: 0,
      points: 0,
      checking: false,
    };
  }

  handleCheck = index => {
    const questions = { ...this.state.questions };
    questions[this.state.currentQuestion].checkedAnswer = index;
    this.setState({ questions });
    if (questions[this.state.currentQuestion].correctIndex === index) {
      this.setState(prevState => {
        return {
          points: prevState.points++,
        };
      });
    }
  };

  handleNext = () => {
    console.log("click")
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion++,
      };
    });
  };

  handlePrevious = () => {
    console.log("click")
    this.setState(prevState => {
      return {
        currentQuestion: prevState.currentQuestion--,
      };
    });
  };

  handleCheckAnswers = () => {
    this.setState({ currentQuestion: 0, checking: true });
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
                correctIndex: Math.floor(Math.random() * 4),
                checkedAnswer: "",
              };
            }),
          ],
        });
      })
      .catch(err => {
        console.log(err, "Unable to fetch questions");
      });
  }

  render({ questions, currentQuestion } = this.state) {
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
            handleCheck={index => this.handleCheck(index)}
            checking={this.state.checking}
          />
          <div className="navButtons">
            <button className="prevBtn" onClick={this.handlePrevious}>
              Previous
            </button>
            <p>{currentQuestion + 1}/10</p>
            <button className="nextBtn" onClick={this.handleNext}>
              Next
            </button>
          </div>
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
