import { Component, OnInit } from '@angular/core';
import {QuizModel} from '../../models/quiz-model';
import {Router} from '@angular/router';
import {QuizzComponent} from '../quizz/quizz.component';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  quizzes: QuizModel[];

  constructor(private  router: Router){
              // private qr: QuizzComponent) {
  }

  ngOnInit() {
    this.quizzes = [
      new QuizModel('QUIZ 1'),
      new QuizModel('QUIZ 2')
    ];
  }

  goToQuiz(index: number) {
    // this.qr.generate(index);
    this.router.navigate(['/quiz/' + index]);

  }
}
