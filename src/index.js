import { YesOrNoQuestion } from './utilities/yesOrNo';
import { SingleChoiceQuestion } from './utilities/singleChoice';
import { MultiChoiceQuestion } from './utilities/multipleChoice';
import {Quiz} from "./utilities/quiz";
import {Question} from "./utilities/question";


const quiz = new Quiz([
  new Question('What is the capital of Spain', 'madrid'),
  new YesOrNoQuestion('Can a square be considered a rectangle?', 'yes'),
  new YesOrNoQuestion(
    'Can a rectangle always be considered a square?',
    'no',
  ),
  new SingleChoiceQuestion(
    `Which gas is most abundant in the Earth's atmosphere?`,
    ['oxygen', 'hydrogen', 'carbon dioxide', 'nitrogen'],
    'd',
  ),
  new MultiChoiceQuestion(
    `Which of these gases are present in Earth's atmosphere`,
    ['oxygen', 'hydrogen', 'carbon dioxide', 'nitrogen'],
    'a,b,c,d',
  ),
]);

quiz.start();
