import { Question } from './question';

export class SingleChoiceQuestion extends Question {
  constructor(question, choices, answer) {
    super(question, answer);
    this.choices = choices;
  }
  formatQuestion() {
    let formattedQuestion = `${this.question}\n`;
    const description = `Answer a, b, c or d`;
    this.choices.forEach(function (choice, index) {
      const prefix = String.fromCharCode(97 + index);
      formattedQuestion += `${prefix}) ${choice}\n`;
    });
    formattedQuestion += description;
    return formattedQuestion;
  }
  formatAnswer(userAnswer) {
    return userAnswer.toLowerCase().replace(/\s/g, '');
  }
}
