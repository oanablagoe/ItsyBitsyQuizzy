export class AnswerModel {
  public theAnswer: string;
  public valid: boolean;
  constructor(theAnswer: string, valid: boolean) {
    this.theAnswer = theAnswer;
    this.valid = valid;
  }
}
