export class YesOrNoQuestion {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
  formatQuestion() {
    const description = `answer 'Yes' or 'No'`;
    return `${this.question}\n${description}`;
  }
}
