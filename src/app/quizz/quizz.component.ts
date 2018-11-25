import {Component, Injectable, OnInit} from '@angular/core';
import {QuizModel} from '../../models/quiz-model';
import {AnswerModel} from '../../models/answer-model';
import {QuestionModel} from '../../models/question-model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

@Injectable()
export class QuizzComponent implements OnInit {
  public quizModel: QuizModel;

  constructor() {
  }

  ngOnInit() {
    this.quizModel = new QuizModel('huh???');
    const ans = new AnswerModel ('yasss', true);
    const ansarr: AnswerModel[] = [ans];
    // ansarr.push(ans);
    const qm = new QuestionModel ( 'yas or pass???');
    qm._answers = ansarr;
    const qmarr: QuestionModel[] = [qm];
    // qmarr.push(qm);
    this.quizModel._questions = qmarr;
    console.log(this.quizModel.title);
  }
   onSave() {
    console.log(this.quizModel.title);
   }
}
