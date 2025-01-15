export class Quiz {
  constructor(questions) {
    this.questions = questions;
  }
  start() {
    let result = 0;
    this.questions.forEach(function (question) {
      const userAnswer = window.prompt(question.formatQuestion());
      const formattedUserAnswer = userAnswer.toLowerCase().replace(/\s/g, '');
      if (formattedUserAnswer === question.answer) {
        result++;
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    });
    console.log(`The user got ${result}/${this.questions.length} points`);
    return result;
  }
}