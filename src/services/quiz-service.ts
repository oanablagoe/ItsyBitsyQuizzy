import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CategoryModel} from '../models/category-model';
import {User} from '../app/shared/user.model';
import {QuizModel} from '../models/quiz-model';

export class CategoryService {
  quizzesChanged = new Subject<QuizModel[]>();
  startedEditing = new Subject<number>();

  private quizzes: QuizModel[] = [

  ];


  constructor() {
  }

  setCategories(quizzes: QuizModel[]) {
    this.quizzes = quizzes;
    this.quizzesChanged.next(this.quizzes.slice());
  }

  editCategory(index: number, quizzes: QuizModel) {
    this.quizzes[index] = quizzes;
  }

  getCategories() {
    return this.quizzes.slice();
  }

  getCategory(index: number) {
    return this.quizzes[index];
  }

  addCategory(quizz: QuizModel) {
    this.quizzes.push(quizz);
    this.quizzesChanged.next(this.quizzes.slice());
  }

  deleteCategory(index: number) {
    this.quizzes.splice(index, 1);
    this.quizzesChanged.next(this.quizzes.slice());
  }

  updateCategory(index: number, newQuiz: QuizModel) {
    this.quizzes[index] = newQuiz;
    this.quizzesChanged.next(this.quizzes.slice());
  }
}
