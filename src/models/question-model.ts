import {AnswerModel} from './answer-model';

export class QuestionModel {
  public _answers: AnswerModel[];
  public theQuestion: string;

  constructor( theQuestion: string) {
    this.theQuestion = theQuestion;

  }

  set answers(value: AnswerModel[]) {
    this._answers = value;
  }

}
