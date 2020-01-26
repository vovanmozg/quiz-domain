const { createApp } = require('../..')
const { Db } = require('./db')
const FlatDbProvider = require('./flatDbProvider');

describe('index', () => {
  it('123', async () => {


		/// EXAMPLE OF USING

		flatDbProvider = FlatDbProvider.new();
		app = createApp({ dbProvider: flatDbProvider });
		quiz = app.startQuiz();
		question = quiz.nextQuestion();
		
		expect(question['question']).toEqual("What right ways to disable forgery protection for specific action?")
		
    const res = await question.answer({ index: 0 })


		/*
		сценарии

		пользователь инициировал запуск теста
		фреймворк выбрал вопрос, который нужно задать пользователю
		пользователь увидел вопрос
		пользователь выбрал ответ
		фреймворк проверил ответ и вернул результат

		запустил тест
		ответил на несколько вопросов
		завершил тест
		*/

		console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
		console.log(res)
		
    //expect(res).toEqual(1);
  });

});

