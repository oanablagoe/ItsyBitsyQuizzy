import {Component, Injectable, OnInit} from '@angular/core';
import {QuizModel} from '../../models/quiz-model';
import {AnswerModel} from '../../models/answer-model';
import {QuestionModel} from '../../models/question-model';
import {FormGroup} from '@angular/forms';
import index from '@angular/cli/lib/cli';

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
  myAngularxQrCode: string;
  qm: QuestionModel;

  constructor() {
  }

  ngOnInit() {
    this.quizModel = new QuizModel('QUIZ 1');
    for (let j = 0; j < 4; j++) {
      this.qm = new QuestionModel(this.makeRandom());
      for (let i = 0; i < 4; i++) {
        this.ans = new AnswerModel(this.makeRandom(), true);
        this.ansarr.push(this.ans);
      }
      this.qm.answers = this.ansarr;
      this.qmarr.push(this.qm);
    }
    console.log(this.qmarr);
    this.quizModel.questions = this.qmarr;
    this.myAngularxQrCode = 'http://10.10.10.66:4200/quiz/0';
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

  submitAnswers() {
  }
}
