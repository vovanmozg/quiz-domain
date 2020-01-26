const store = require('./store').default

class Question {
  answer(answerObject) {
  	console.log('=============================================')
    store.dispatch(quistionAnswered({}))

    return Promise.resolve(1)
  }
}

exports.Question = Question;