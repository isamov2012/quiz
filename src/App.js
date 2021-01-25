import React, { Component } from "react";
import questions from "./Questions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      qNumber: 0,
      counter: 0,
    };
  }

  handleClick = (isCorrect) => {
    isCorrect && this.setState({ counter: this.state.counter + 1 });
    this.setState({ qNumber: this.state.qNumber + 1 });
  };
  render() {
    const { questions, counter, qNumber } = this.state;
    return (
      <div className="app">
        {qNumber === 4 ? (
          <div className="score-section">
            You scored {counter} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {qNumber + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[qNumber].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[qNumber].answerOptions.map((answer, i) => {
                return (
                  <button
                    onClick={() => this.handleClick(answer.isCorrect)}
                    key={i}
                  >
                    {answer.answerText}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
