import {Subject} from 'rxjs/Subject';
import {QuestionModel} from '../models/question-model';


export class AnswerService {
  questionsChanged = new Subject<QuestionModel[]>();
  startedEditing = new Subject<number>();

  private questions: QuestionModel[] = [];


  constructor() {
  }

  setCategories(questions: QuestionModel[]) {
    this.questions = questions;
    this.questionsChanged.next(this.questions.slice());
  }

  editCategory(index: number, question: QuestionModel) {
    this.questions[index] = question;
  }

  getCategories() {
    return this.questions.slice();
  }

  getCategory(index: number) {
    return this.questions[index];
  }

  addCategory(question: QuestionModel) {
    this.questions.push(question);
    this.questionsChanged.next(this.questions.slice());
  }

  deleteCategory(index: number) {
    this.questions.splice(index, 1);
    this.questionsChanged.next(this.questions.slice());
  }

  updateCategory(index: number, newAnswers: QuestionModel) {
    this.questions[index] = newAnswers;
    this.questionsChanged.next(this.questions.slice());
  }
}
