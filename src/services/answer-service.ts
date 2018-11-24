import {Subject} from 'rxjs/Subject';
import {AnswerModel} from '../models/answer-model';

export class AnswerService {
  answersChanged = new Subject<AnswerModel[]>();
  startedEditing = new Subject<number>();

  private answers: AnswerModel[] = [];


  constructor() {
  }

  setCategories(answers: AnswerModel[]) {
    this.answers = answers;
    this.answersChanged.next(this.answers.slice());
  }

  editCategory(index: number, answer: AnswerModel) {
    this.answers[index] = answer;
  }

  getCategories() {
    return this.answers.slice();
  }

  getCategory(index: number) {
    return this.answers[index];
  }

  addCategory(answer: AnswerModel) {
    this.answers.push(answer);
    this.answersChanged.next(this.answers.slice());
  }

  deleteCategory(index: number) {
    this.answers.splice(index, 1);
    this.answersChanged.next(this.answers.slice());
  }

  updateCategory(index: number, newAnswers: AnswerModel) {
    this.answers[index] = newAnswers;
    this.answersChanged.next(this.answers.slice());
  }
}
