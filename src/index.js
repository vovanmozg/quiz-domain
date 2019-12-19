
const { createApp } = require('./quiz-domain')

console.log(createApp)


class Db {

}


/// EXAMPLE OF USING


db = new Db();
app = createApp(db);
quiz = app.startQuiz();
question = quiz.nextQuestion();
setTimeout(() => {
    question
      .answer({ index: 0 })
      .then(result => console.log(result))

  }
  , 1000)

console.log('end')


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
