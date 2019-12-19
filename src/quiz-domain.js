const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default




class Question {
  answer(answerObject) {
    store.dispatch(quistionAnswered({}))

    return Promise.resolve(1)
  }
}


class Quiz {
  nextQuestion() {
    return new Question();
  }
}

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

reducer = (state) => state

const store = createStore(reducer, applyMiddleware(thunk));






exports.createApp = createApp;