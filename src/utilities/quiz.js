import { formatAnswers } from './formatAnswer';

export class Quiz {
  constructor(questions) {
    this.questions = questions;
  }
  start() {
    let result = 0;
    this.questions.forEach(function (question) {
      const userAnswer = window.prompt(question.formatQuestion());

      if (formatAnswers(userAnswer) === question.answer) {
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
