const { Question } = require('./question');

class Quiz {
  nextQuestion() {
    return new Question();
  }
}

exports.Quiz = Quiz;
