const { Quiz } = require('./quiz');




class App {
  startQuiz() {
    this.quiz = new Quiz();
    return this.quiz;
  }
}


function createApp(db) {
	return new App(db)
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