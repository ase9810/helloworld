import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { defaultLocale } from './Locale';
import "./styles.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    }
    this.start = this.start.bind(this);
  }

  start = () => {
    this.setState({ start: true })
  }

  shuffleQuestions = (questions) => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }

  shuffleAnswers = (questions) => {
    for (let i = 0; i < questions.length; i++) {
      let arr = [];
      if (questions.answers.length == 5) {
        for (let j = 0; j < 5; j++) {
          let rand = Math.floor(Math.random() * 5);
          switch (rand) {
            case 0:
              arr[j] = questions[i].answers[0];
              break;
            case 1:
              arr[j] = questions[i].answers[1];
              break;
            case 2:
              arr[j] = questions[i].answers[2];
              break;
            case 3:
              arr[j] = questions[i].answers[3];
              break;
            case 4:
              arr[j] = questions[i].answers[4];
              break;
            default:
          }
          for (var k = 0; k < j; k++) {
            if (arr[j] === arr[k]) {
              j--;
            }
          }
        }
        questions[i].answers === arr
      }
    }
    return questions;
  }

  render() {
    const { quiz, shuffle, showDefaultResult, onComplete, customResultPage, showInstantFeedback, continueTillCorrect } = this.props;
    if (!quiz) {
      console.error("Quiz object is required.");
      return (null);
    }

    console.log(locale)

    let questions = quiz.questions;
    if (shuffle) {
      questions = this.shuffleQuestions(questions);
      questions = this.shuffleAnswers(questions);
    }

    questions = questions.map((question, index) => ({
      ...question,
      questionIndex: index + 1
    }));

    return (
      <div className="react-quiz-container">
        {!this.state.start &&
          <div>
            <h2>{quiz.quizTitle}</h2>
            <div>{quiz.questions.length} Questions</div>
            {quiz.quizSynopsis &&
              <div className="quiz-synopsis">
                {quiz.quizSynopsis}
              </div>
            }
            <div className="startQuizWrapper">
              <button onClick={() => this.start()} className="startQuizBtn btn">Start Quiz</button>
            </div>
          </div>
        }

        {
          this.state.start && <Question questions={questions} showDefaultResult={showDefaultResult} onComplete={onComplete} customResultPage={customResultPage} showInstantFeedback={showInstantFeedback} continueTillCorrect={continueTillCorrect} />
        }
      </div>
    );
  }
}

Quiz.propTypes = {
  quiz: PropTypes.object,
  shuffle: PropTypes.bool,
  showDefaultResult: PropTypes.bool,
  onComplete: PropTypes.func,
  customResultPage: PropTypes.func,
  showInstantFeedback: PropTypes.bool,
  continueTillCorrect: PropTypes.bool,
  locale: PropTypes.object,
};

export default Quiz;
