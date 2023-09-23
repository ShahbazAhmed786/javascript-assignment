"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conductQuiz = void 0;
var quizQuestions_1 = require("./quizQuestions");
function conductQuiz() {
    var score = 0;
    var userAnswers = {};
    for (var _i = 0, quizQuestions_2 = quizQuestions_1.quizQuestions; _i < quizQuestions_2.length; _i++) {
        var questionObj = quizQuestions_2[_i];
        var userAnswer = promptQuestion(questionObj.question);
        userAnswers[questionObj.question] = userAnswer;
        if (userAnswer.toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
            score++;
        }
    }
    return { score: score, userAnswers: userAnswers };
}
exports.conductQuiz = conductQuiz;
function promptQuestion(question) {
    // Use Inquirer to prompt the question and collect the user's answer
    // You can customize the prompt here
}
