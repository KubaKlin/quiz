import { Question } from './question';

export class YesOrNoQuestion extends Question {
  constructor(question, answer) {
    super(question, answer);
  }
  formatQuestion() {
    const description = `answer 'Yes' or 'No'`;
    return `${this.question}\n${description}`;
  }
  formatAnswer(userAnswer) {
    return userAnswer.toLowerCase().replace(/\s/g, '');
  }
}
