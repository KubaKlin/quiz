import { singleAnswerQuestion } from './utilities/singleAnswer';
import { choiceQuestion } from './utilities/singleChoice';
import { multiChoiceQuestion } from './utilities/multipleChoice';

class Quiz {
  constructor(questions) {
    this.questions = questions;
  }
  start() {
    let result = 0;
    this.questions.forEach(function (question) {
      const userAnswer = window.prompt(question.formatQuestion());
      const formattedUserAnswer = userAnswer
        .toLowerCase()
        .trim()
        .replace(/\s/g, '');
      if (formattedUserAnswer === question.answer) {
        result++;
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    });
    console.log(`The user got ${result}/${this.questions.length} points`);
  }
}

const quiz = new Quiz([
  new singleAnswerQuestion('Can a square be considered a rectangle?', 'yes'),
  new singleAnswerQuestion(
    'Can a rectangle always be considered a square?',
    'no',
  ),
  new choiceQuestion(
    `Which gas is most abundant in the Earth's atmosphere?`,
    ['oxygen', 'hydrogen', 'carbon dioxide', 'nitrogen'],
    'd',
  ),
  new multiChoiceQuestion(
    `Which of these gases are present in Earth's atmosphere`,
    ['oxygen', 'hydrogen', 'carbon dioxide', 'nitrogen'],
    'a,b,c,d',
  ),
]);

quiz.start();
