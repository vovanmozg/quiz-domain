const { Question } = require('./question');
const db = require('./db');

class Quiz {
  // constructor(db) {
  //   this.db = db;
  // }

  nextQuestion() {
    db.collection('questions').findOne();

    return new Question();
  }
}

exports.Quiz = Quiz;
