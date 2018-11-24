import {QuestionModel} from './question-model';

export class QuizModel {
  private _questions: QuestionModel[];
  public id: string;
  public title: string;

  constructor(title: string) {
    this.title = title;
    this.id = this.generateRandomId();
  }

  generateRandomId() {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return randLetter + Date.now();
  }

  set questions(questions: QuestionModel[]) {
    this._questions = questions;
  }
}
