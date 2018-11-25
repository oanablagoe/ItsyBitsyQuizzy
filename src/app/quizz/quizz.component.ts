import {Component, Injectable, OnInit} from '@angular/core';
import {QuizModel} from '../../models/quiz-model';
import {AnswerModel} from '../../models/answer-model';
import {QuestionModel} from '../../models/question-model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

@Injectable()
export class QuizzComponent implements OnInit {
  public quizModel: QuizModel;
  quizForm: FormGroup;
  ans: AnswerModel;
  ansarr: AnswerModel[] = [];
  qmarr: QuestionModel[] = [];
  constructor() {
  }

  ngOnInit() {
    for (let j = 0; j < 4; j++) {
      const qm = new QuestionModel(this.makeRandom());
      for (let i = 0; i < 4; i++) {
        this.ans = new AnswerModel(this.makeRandom(), true);
        this.ansarr.push(this.ans);
      }
      qm._answers = this.ansarr;
      this.qmarr.push(qm);
    }
    this.quizModel._questions = this.qmarr;
  }

  onSubmit() {
    console.log(this.quizModel.title);
  }

  makeRandom() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
