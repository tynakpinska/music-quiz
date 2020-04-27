import React, { Component } from "react";
import AnswersList from "./AnswersList";

const initialState = {
  questions: [],
  currentQuestion: 0,
  points: 0,
  checking: false,
  blocked: false,
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  fetchQuestions = () => {
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
  };

  handleCheck = index => {
    const questions = { ...this.state.questions };
    if (questions[this.state.currentQuestion].checkedAnswer === index) {
      questions[this.state.currentQuestion].checkedAnswer = undefined;
      this.setState({ questions });
    } else {
      questions[this.state.currentQuestion].checkedAnswer = index;
      this.setState({ questions, blocked: false })
    }

  };

  handleNext = (e, { questions, currentQuestion } = this.state) => {
    if (questions[currentQuestion].checkedAnswer === "") {
      this.setState({ blocked: true });
    } else {
      this.setState({ currentQuestion: currentQuestion + 1, blocked: false });
    }
    if (questions[this.state.currentQuestion].correctIndex === questions[this.state.currentQuestion].checkedAnswer) {
      this.setState(prevState => {
        return {
          points: prevState.points+1,
        };
      });
    }
  };

  handlePrevious = (e, { currentQuestion } = this.state) => {
    this.setState({ currentQuestion: currentQuestion - 1 });
  };

  handleCheckAnswers = () => {
    this.setState({ currentQuestion: 0, checking: true });
  };

  handlePlayAgain = () => {
    this.setState(initialState);
    this.fetchQuestions();
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render({ questions, currentQuestion, points, checking } = this.state) {
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
            checking={checking}
          />
          <div className="navButtons">
            {this.state.currentQuestion ? (
              <button className="prevBtn" onClick={this.handlePrevious}>
                Previous
              </button>
            ) : (
              <div></div>
            )}
            <p>{currentQuestion + 1}/10</p>
            <button className="nextBtn" onClick={this.handleNext}>
              Next
            </button>
          </div>
          {this.state.blocked ? <p>Select your answer</p> : <div></div>}
        </div>
      ) : (
        <div></div>
      )
    ) : (
      <div className="quiz">
        <p>Score: {points}/10</p>
        <button onClick={this.handleCheckAnswers}>Check answers</button>
        <button onClick={this.handlePlayAgain}>Play again</button>
      </div>
    );
  }
}

export default Quiz;
