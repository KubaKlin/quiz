import { YesOrNoQuestion } from './yesOrNo';

export class SingleChoiceQuestion extends YesOrNoQuestion {
  constructor(question, choices, answer) {
    super(question, choices, answer);
    this.choices = choices;
    this.answer = answer;
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
}
