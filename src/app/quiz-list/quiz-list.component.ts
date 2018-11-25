import {Component, OnInit} from '@angular/core';
import {QuizModel} from '../../models/quiz-model';
import {Router} from '@angular/router';
import {QuizzComponent} from '../quizz/quizz.component';
import {QuestionModel} from '../../models/question-model';


@Component({
  selector: 'app-questions',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes: QuizModel[];
  questions: QuestionModel[];
  index: number;
  constructor(private  router: Router) {
  }

  ngOnInit() {
    this.quizzes = [
      new QuizModel('QUIZ 1'),
      new QuizModel('QUIZ 2')
    ];
  }

  goToQuiz(index: number) {
    this.index = index;

    this.router.navigate(['/quiz/' + index]);

  }
}
