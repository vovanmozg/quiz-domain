const { createApp } = require('../index')
const { Db } = require('./db')

describe('index', () => {
  it('123', async () => {


		/// EXAMPLE OF USING

		db = new Db();
		app = createApp(db);
		quiz = app.startQuiz();
		question = quiz.nextQuestion();
		
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

		expect(question['question']).toEqual("What right ways to disable forgery protection for specific action?")
    expect(res).toEqual(1);
  });

});

