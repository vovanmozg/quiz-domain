const { Quiz } = require('./quiz');
const db = require('./db');



class App {
	constructor(options) {
	  db.setProvider(options.dbProvider);
	}

  startQuiz() {
    this.quiz = new Quiz();
    return this.quiz;
  }
}


function createApp(options) {
	return new App(options)
}



/// ACTIONS

quistionAnswered = (answerObject) => ({
  type: 'QUESTION_ANSWERED',
  answerObject
});


// class Answer {
//
// 	constructor(question) {
// 		this.question = question;
// 	}
//
// 	perform() {
//
// 	}
// }



1

exports.createApp = createApp;