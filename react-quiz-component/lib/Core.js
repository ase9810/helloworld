"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marked = _interopRequireDefault(require("marked"));

var _dompurify = _interopRequireDefault(require("dompurify"));

var _reactMathjax = _interopRequireDefault(require("react-mathjax2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Core =
/*#__PURE__*/
function (_Component) {
  _inherits(Core, _Component);

  function Core(props) {
    var _this;

    _classCallCheck(this, Core);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Core).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkAnswer", function (index, answer, correctAnswer, answerSelectionType) {
      var _this$state = _this.state,
          correct = _this$state.correct,
          incorrect = _this$state.incorrect,
          currentQuestionIndex = _this$state.currentQuestionIndex,
          continueTillCorrect = _this$state.continueTillCorrect,
          userInput = _this$state.userInput;
      var _this$state2 = _this.state,
          userAttempt = _this$state2.userAttempt,
          showNextQuestionButton = _this$state2.showNextQuestionButton;

      console.log(_this$state)

      if (answerSelectionType == 'single') {
        if (userInput[currentQuestionIndex] == undefined) {
          userInput.push(index);
        }

        if (answer == correctAnswer) {
          if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
            correct.push(currentQuestionIndex);
          }

          var disabledAll = {
            0: {
              disabled: true
            },
            1: {
              disabled: true
            },
            2: {
              disabled: true
            },
            3: {
              disabled: true
            },
            4: {
              disabled: true
            }
          };

          _this.setState(function (prevState) {
            var buttons = Object.assign({}, prevState.buttons, _objectSpread({}, disabledAll, _defineProperty({}, index - 1, {
              className: answer == correctAnswer ? "correct" : "incorrect"
            })));
            return {
              buttons: buttons
            };
          });

          _this.setState({
            correctAnswer: true,
            incorrectAnswer: false,
            correct: correct,
            showNextQuestionButton: true
          });
        } else {
          if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
            incorrect.push(currentQuestionIndex);
          }

          if (continueTillCorrect) {
            _this.setState(function (prevState) {
              var buttons = Object.assign({}, prevState.buttons, _defineProperty({}, index - 1, {
                disabled: !prevState.buttons[index - 1]
              }));
              return {
                buttons: buttons
              };
            });
          } else {
            var _disabledAll = {
              0: {
                disabled: true
              },
              1: {
                disabled: true
              },
              2: {
                disabled: true
              },
              3: {
                disabled: true
              },
              4: {
                disabled: true
              }
            };

            _this.setState(function (prevState) {
              var buttons = Object.assign({}, prevState.buttons, _objectSpread({}, _disabledAll, _defineProperty({}, index - 1, {
                className: answer == correctAnswer ? "correct" : "incorrect"
              })));
              return {
                buttons: buttons
              };
            });

            _this.setState({
              showNextQuestionButton: true
            });
          }

          _this.setState({
            incorrectAnswer: true,
            correctAnswer: false,
            incorrect: incorrect
          });
        }
      } else {
        var maxNumberOfMultipleSelection = correctAnswer.length;

        if (userInput[currentQuestionIndex] == undefined) {
          userInput[currentQuestionIndex] = [];
        }

        if (userInput[currentQuestionIndex].length < maxNumberOfMultipleSelection) {
          userInput[currentQuestionIndex].push(index);

          if (correctAnswer.includes(index)) {
            if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
              _this.setState(function (prevState) {
                var buttons = Object.assign({}, prevState.buttons, _defineProperty({}, index - 1, {
                  disabled: !prevState.buttons[index - 1],
                  className: correctAnswer.includes(index) ? "correct" : "incorrect"
                }));
                return {
                  buttons: buttons
                };
              });
            }
          } else {
            if (userInput[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
              _this.setState(function (prevState) {
                var buttons = Object.assign({}, prevState.buttons, _defineProperty({}, index - 1, {
                  className: correctAnswer.includes(index) ? "correct" : "incorrect"
                }));
                return {
                  buttons: buttons
                };
              });
            }
          }
        }

        if (maxNumberOfMultipleSelection == userAttempt) {
          var cnt = 0;

          for (var i = 0; i < correctAnswer.length; i++) {
            if (userInput[currentQuestionIndex].includes(correctAnswer[i])) {
              cnt++;
            }
          }

          if (cnt == maxNumberOfMultipleSelection) {
            correct.push(currentQuestionIndex);

            _this.setState({
              correctAnswer: true,
              incorrectAnswer: false,
              correct: correct,
              showNextQuestionButton: true,
              userAttempt: 1
            });
          } else {
            incorrect.push(currentQuestionIndex);

            _this.setState({
              incorrectAnswer: true,
              correctAnswer: false,
              incorrect: incorrect,
              showNextQuestionButton: true,
              userAttempt: 1
            });
          }
        } else {
          if (!showNextQuestionButton) {
            _this.setState({
              userInput: userInput,
              userAttempt: userAttempt + 1
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextQuestion", function (currentQuestionIndex) {
      var questions = _this.props.questions;
      var initState = {
        incorrectAnswer: false,
        correctAnswer: false,
        showNextQuestionButton: false,
        buttons: {}
      };

      if (currentQuestionIndex + 1 == questions.length) {
        _this.setState(_objectSpread({}, initState, {
          endQuiz: true
        }));
      } else {
        _this.setState(_objectSpread({}, initState, {
          currentQuestionIndex: currentQuestionIndex + 1
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMessageforCorrectAnswer", function (question) {
      var defaultMessage = 'You are correct. Please click Next to continue.';
      return question.messageForCorrectAnswer || defaultMessage;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderMessageforIncorrectAnswer", function (question) {
      var defaultMessage = 'Incorrect answer. Please try again.';
      return question.messageForIncorrectAnswer || defaultMessage;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderExplanation", function (question, isResultPage) {
      var explanation = question.explanation;

      if (!explanation) {
        return null;
      }

      if (isResultPage) {
        return _react.default.createElement("div", {
          className: "explaination"
        }, explanation);
      }

      return _react.default.createElement("div", null, _react.default.createElement("br", null), explanation);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.setState({
        filteredValue: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderQuizResultFilter", function () {
      var appLocale = _this.props.appLocale;
      return _react.default.createElement("div", {
        className: "quiz-result-filter"
      }, _react.default.createElement("select", {
        value: _this.state.filteredValue,
        onChange: _this.handleChange
      }, _react.default.createElement("option", {
        value: "all"
      }, appLocale.resultFilterAll), _react.default.createElement("option", {
        value: "correct"
      }, appLocale.resultFilterCorrect), _react.default.createElement("option", {
        value: "incorrect"
      }, appLocale.resultFilterIncorrect)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderAnswerInResult", function (question, userInputIndex) {
      var answers = question.answers,
          correctAnswer = question.correctAnswer,
          questionType = question.questionType;
      var answerSelectionType = question.answerSelectionType;
      var answerBtnCorrectClassName;
      var answerBtnIncorrectClassName; // Default single to avoid code breaking due to automatic version upgrade

      answerSelectionType = answerSelectionType || 'single';
      return answers.map(function (answer, index) {
        if (answerSelectionType == 'single') {
          answerBtnCorrectClassName = answers[index] == correctAnswer ? ' correct ' : '';
          answerBtnIncorrectClassName = answers[userInputIndex-1] != correctAnswer && index + 1 == userInputIndex ? ' incorrect ' : '';
        } else {
          answerBtnCorrectClassName = correctAnswer.includes(answers[index]) ? ' correct ' : '';
          answerBtnIncorrectClassName = !correctAnswer.includes(answers[index]) && userInputIndex.includes(answers[index]) ? ' incorrect ' : '';
        }

        return _react.default.createElement("div", {
          key: index
        }, _react.default.createElement("button", {
          disabled: true,
          className: "answerBtn btn " + answerBtnCorrectClassName + answerBtnIncorrectClassName
        }, questionType == 'text' && _react.default.createElement("span", null,
         /*#__PURE__*/_react.default.createElement(_reactMathjax.default.Text, {
          text: answer
        })), questionType == 'photo' && _react.default.createElement("img", {
          src: answer
        })));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderQuizResultQuestions", function () {
      var filteredValue = _this.state.filteredValue;
      var userInput = _this.state.userInput;
      var questions = _this.props.questions;

      if (filteredValue != 'all') {
        questions = questions.filter(function (question, index) {
          return _this.state[filteredValue].indexOf(index) != -1;
        });
        userInput = userInput.filter(function (input, index) {
          return _this.state[filteredValue].indexOf(index) != -1;
        });
      }

      return questions.map(function (question, index) {
        var userInputIndex = userInput[index]; // Default single to avoid code breaking due to automatic version upgrade

        var answerSelectionType = question.answerSelectionType || 'single';
        return _react.default.createElement("div", {
          className: "result-answer-wrapper",
          key: index + 1
        }, _react.default.createElement("h3", null,
          /*#__PURE__*/_react.default.createElement(_reactMathjax.default.Text, {
          text: "Q".concat(question.questionIndex, ": ").concat(question.question)
        })), question.questionPic && _react.default.createElement("img", {
          src: question.questionPic
        }), _this.renderTags(answerSelectionType, answerSelectionType == "single" ? '1' : question.correctAnswer.length), _react.default.createElement("div", {
          className: "result-answer"
        }, _this.renderAnswerInResult(question, userInputIndex)), _this.renderExplanation(question, true));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rawMarkup", function (data) {
      var sanitizer = _dompurify.default.sanitize;
      var rawMarkup = (0, _marked.default)(sanitizer(data));
      return {
        __html: rawMarkup
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderAnswers", function (question, buttons) {
      var answers = question.answers,
          correctAnswer = question.correctAnswer,
          questionType = question.questionType;
      var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

      answerSelectionType = answerSelectionType || 'single';
      return answers.map(function (answer, index) {
        if (buttons[index] != undefined) {
          return _react.default.createElement("button", {
            key: index,
            disabled: buttons[index].disabled || false,
            className: "".concat(buttons[index].className, " answerBtn btn"),
            onClick: function onClick() {
              return _this.checkAnswer(index + 1, answer, correctAnswer, answerSelectionType);
            }
          }, questionType == 'text' && _react.default.createElement("span", null, 
          /*#__PURE__*/_react.default.createElement(_reactMathjax.default.Text, {
            text: answer
          })
          ), questionType == 'photo' && _react.default.createElement("img", {
            src: answer
          }));
        } else {
          return _react.default.createElement("button", {
            key: index,
            onClick: function onClick() {
              return _this.checkAnswer(index + 1, answer, correctAnswer, answerSelectionType);
            },
            className: "answerBtn btn"
          }, questionType == 'text' && 
          /*#__PURE__*/_react.default.createElement(_reactMathjax.default.Text, {
            text: answer
          }), questionType == 'photo' && _react.default.createElement("img", {
            src: answer
          }));
        }
      });
    });

    _this.state = {
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      endQuiz: false,
      currentQuestionIndex: 0,
      buttons: {},
      buttonClasses: {},
      correct: [],
      incorrect: [],
      userInput: [],
      filteredValue: 'all',
      userAttempt: 1,
      showDefaultResult: _this.props.showDefaultResult != undefined ? _this.props.showDefaultResult : true,
      onComplete: _this.props.onComplete != undefined ? _this.props.onComplete : null,
      customResultPage: _this.props.customResultPage != undefined ? _this.props.customResultPage : null,
      showInstantFeedback: _this.props.showInstantFeedback != undefined ? _this.props.showInstantFeedback : false,
      continueTillCorrect: _this.props.continueTillCorrect != undefined ? _this.props.continueTillCorrect : false
    };
    return _this;
  }

  _createClass(Core, [{
    key: "renderTags",
    value: function renderTags(answerSelectionType, numberOfSelection) {
      var _this$props$appLocale = this.props.appLocale,
          singleSelectionTagText = _this$props$appLocale.singleSelectionTagText,
          multipleSelectionTagText = _this$props$appLocale.multipleSelectionTagText,
          pickNumberOfSelection = _this$props$appLocale.pickNumberOfSelection;
      return _react.default.createElement("div", {
        className: "tag-container"
      }, answerSelectionType == 'single' && _react.default.createElement("span", {
        className: "single selection-tag"
      }, " ", singleSelectionTagText), answerSelectionType == 'multiple' && _react.default.createElement("span", {
        className: "multiple selection-tag"
      }, " ", multipleSelectionTagText), _react.default.createElement("span", {
        className: "number-of-selection"
      }, pickNumberOfSelection.replace("<numberOfSelection>", numberOfSelection)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          questions = _this$props.questions,
          appLocale = _this$props.appLocale;
      var _this$state3 = this.state,
          correct = _this$state3.correct,
          incorrect = _this$state3.incorrect,
          userInput = _this$state3.userInput,
          currentQuestionIndex = _this$state3.currentQuestionIndex,
          correctAnswer = _this$state3.correctAnswer,
          incorrectAnswer = _this$state3.incorrectAnswer,
          endQuiz = _this$state3.endQuiz,
          showInstantFeedback = _this$state3.showInstantFeedback,
          buttons = _this$state3.buttons,
          onComplete = _this$state3.onComplete,
          showNextQuestionButton = _this$state3.showNextQuestionButton,
          showDefaultResult = _this$state3.showDefaultResult,
          customResultPage = _this$state3.customResultPage;
      var question = questions[currentQuestionIndex];
      var totalPoints = 0;
      var correctPoints = 0;

      for (var i = 0; i < questions.length; i++) {
        var point = questions[i].point || 0;

        if (typeof point === 'string' || point instanceof String) {
          point = parseInt(point);
        }

        totalPoints = totalPoints + point;

        if (correct.includes(i)) {
          correctPoints = correctPoints + point;
        }
      }

      var questionSummary = {
        numberOfQuestions: questions.length,
        numberOfCorrectAnswers: correct.length,
        numberOfIncorrectAnswers: incorrect.length,
        questions: questions,
        userInput: userInput,
        totalPoints: totalPoints,
        correctPoints: correctPoints
      };
      var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

      answerSelectionType = answerSelectionType || 'single';
      return _react.default.createElement("div", {
        className: "questionWrapper"
      }, !endQuiz && _react.default.createElement("div", {
        className: "questionWrapperBody"
      }, _react.default.createElement("div", {
        className: "questionModal"
      }, incorrectAnswer && showInstantFeedback && _react.default.createElement("div", {
        className: "alert incorrect"
      }, this.renderMessageforIncorrectAnswer(question)), correctAnswer && showInstantFeedback && _react.default.createElement("div", {
        className: "alert correct"
      }, this.renderMessageforCorrectAnswer(question), this.renderExplanation(question, false))), _react.default.createElement("div", null, appLocale.question, " ", currentQuestionIndex + 1, ":"), _react.default.createElement("h3", null,
        /*#__PURE__*/_react.default.createElement(_reactMathjax.default.Text, {
          text: question.question
        })
      ), question.questionPic && _react.default.createElement("img", {
        src: question.questionPic
      }), this.renderTags(answerSelectionType, answerSelectionType == "single" ? '1' : question.correctAnswer.length), this.renderAnswers(question, buttons), showNextQuestionButton && _react.default.createElement("div", null, _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.nextQuestion(currentQuestionIndex);
        },
        className: "nextQuestionBtn btn"
      }, appLocale.nextQuestionBtn))), endQuiz && showDefaultResult && customResultPage == null && _react.default.createElement("div", {
        className: "card-body"
      }, _react.default.createElement("h2", null, appLocale.resultPageHeaderText.replace("<correctIndexLength>", correct.length).replace("<questionLength>", questions.length)), _react.default.createElement("h2", null, appLocale.resultPagePoint.replace("<correctPoints>", correctPoints).replace("<totalPoints>", totalPoints)), _react.default.createElement("br", null), this.renderQuizResultFilter(), this.renderQuizResultQuestions()), endQuiz && onComplete != undefined && onComplete(questionSummary), endQuiz && !showDefaultResult && customResultPage != undefined && customResultPage(questionSummary));
    }
  }]);

  return Core;
}(_react.Component);

Core.propTypes = {
  questions: _propTypes.default.array,
  showDefaultResult: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  customResultPage: _propTypes.default.func,
  showInstantFeedback: _propTypes.default.bool,
  continueTillCorrect: _propTypes.default.bool,
  appLocale: _propTypes.default.object
};
var _default = Core;
exports.default = _default;