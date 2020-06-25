"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Core = _interopRequireDefault(require("./Core"));

var _Locale = require("./Locale");

require("./styles.css");

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

var Quiz =
/*#__PURE__*/
function (_Component) {
  _inherits(Quiz, _Component);

  function Quiz(props) {
    var _this;

    _classCallCheck(this, Quiz);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Quiz).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "start", function () {
      _this.setState({
        start: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shuffleQuestions", function (questions) {
      for (var i = questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [questions[j], questions[i]];
        questions[i] = _ref[0];
        questions[j] = _ref[1];
      }

      return questions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shuffleAnswers", function (questions) {
      for (var i = 0; i < questions.length; i++) {
        var arr = [];
        if (questions[i].answers.length == 5) {
          for (var j = 0; j < 5; j++) {
            var rand = Math.floor(Math.random() * 5);
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
              if (arr[j] == arr[k]) {
                j--;
              }
            }
          }
          questions[i].answers = arr;
        }
      }
      return questions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validateQuiz", function (quiz) {
      if (!quiz) {
        console.error("Quiz object is required.");
        return false;
      }

      var questions = quiz.questions;

      if (!questions) {
        console.error("Field 'questions' is required.");
        return false;
      }

      for (var i = 0; i < questions.length; i++) {
        var _questions$i = questions[i],
            question = _questions$i.question,
            questionType = _questions$i.questionType,
            questionPic = _questions$i.questionPic,
            answerSelectionType = _questions$i.answerSelectionType,
            answers = _questions$i.answers,
            correctAnswer = _questions$i.correctAnswer;

        if (!question) {
          console.error("Field 'question' is required.");
          return false;
        }

        if (!questionType) {
          console.error("Field 'questionType' is required.");
          return false;
        } else {
          if (questionType != 'text' && questionType != 'photo') {
            console.error("The value of 'questionType' is either 'text' or 'photo'.");
            return false;
          }
        }

        if (!answers) {
          console.error("Field 'answers' is required.");
          return false;
        } else {
          if (!Array.isArray(answers)) {
            console.error("Field 'answers' has to be an Array");
            return false;
          }
        }

        if (!correctAnswer) {
          console.error("Field 'correctAnswer' is required.");
          return false;
        }

        if (!answerSelectionType) {
          // Default single to avoid code breaking due to automatic version upgrade
          console.warn("Field answerSelectionType should be defined since v0.3.0. Use single by default.");
          answerSelectionType = answerSelectionType || 'single';
        }

        if (answerSelectionType == 'single' && !(typeof answerSelectionType === 'string' || answerSelectionType instanceof String)) {
          console.error("answerSelectionType is single but expecting String in the field correctAnswer");
          return false;
        }

        if (answerSelectionType == 'multiple' && !Array.isArray(correctAnswer)) {
          console.error("answerSelectionType is multiple but expecting Array in the field correctAnswer");
          return false;
        }
      }

      return true;
    });

    _this.state = {
      start: false
    };
    _this.start = _this.start.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Quiz, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          quiz = _this$props.quiz,
          shuffle = _this$props.shuffle,
          showDefaultResult = _this$props.showDefaultResult,
          onComplete = _this$props.onComplete,
          customResultPage = _this$props.customResultPage,
          showInstantFeedback = _this$props.showInstantFeedback,
          continueTillCorrect = _this$props.continueTillCorrect;

      if (!this.validateQuiz(quiz)) {
        return null;
      }

      var appLocale = _objectSpread({}, _Locale.defaultLocale, quiz.appLocale);

      var questions = quiz.questions;

      if (shuffle) {
        questions = this.shuffleQuestions(questions);
        questions = this.shuffleAnswers(questions);
      }

      questions = questions.map(function (question, index) {
        return _objectSpread({}, question, {
          questionIndex: index + 1
        });
      });
      return _react.default.createElement("div", {
        className: "react-quiz-container"
      }, !this.state.start && _react.default.createElement("div", null, _react.default.createElement("h2", null, quiz.quizTitle), _react.default.createElement("div", null, " ", appLocale.landingHeaderText.replace("<questionLength>", quiz.questions.length)), quiz.quizSynopsis && _react.default.createElement("div", {
        className: "quiz-synopsis"
      }, quiz.quizSynopsis), _react.default.createElement("div", {
        className: "startQuizWrapper"
      }, _react.default.createElement("button", {
        onClick: function onClick() {
          return _this2.start();
        },
        className: "startQuizBtn btn"
      }, appLocale.startQuizBtn))), this.state.start && _react.default.createElement(_Core.default, {
        questions: questions,
        showDefaultResult: showDefaultResult,
        onComplete: onComplete,
        customResultPage: customResultPage,
        showInstantFeedback: showInstantFeedback,
        continueTillCorrect: continueTillCorrect,
        appLocale: appLocale
      }));
    }
  }]);

  return Quiz;
}(_react.Component);

Quiz.propTypes = {
  quiz: _propTypes.default.object,
  shuffle: _propTypes.default.bool,
  showDefaultResult: _propTypes.default.bool,
  onComplete: _propTypes.default.func,
  customResultPage: _propTypes.default.func,
  showInstantFeedback: _propTypes.default.bool,
  continueTillCorrect: _propTypes.default.bool
};
var _default = Quiz;
exports.default = _default;