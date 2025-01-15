import { Question } from './question';

export class MultiChoiceQuestion extends Question {
  constructor(question, choices, answer) {
    super(question, choices, answer);
    this.choices = choices;
    this.answer = answer;
  }
  formatQuestion() {
    let formattedQuestion = `${this.question}\n`;
    const description = `Answer a, b, c or d. Divide your answers using commas.`;
    this.choices.forEach(function (choice, index) {
      const prefix = String.fromCharCode(97 + index);
      formattedQuestion += `${prefix}) ${choice}\n`;
    });
    formattedQuestion += description;
    return formattedQuestion;
  }
}
