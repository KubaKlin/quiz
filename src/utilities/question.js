export class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
  formatQuestion() {
    return `${this.question}\n`;
  }
  formatAnswer(userAnswer) {
    return userAnswer.toLowerCase().replace(/\s/g, '');
  }
}
