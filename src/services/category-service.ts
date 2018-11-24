import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CategoryModel} from '../models/category-model';
import {User} from '../app/shared/user.model';

export class CategoryService {
  categoriesChanged = new Subject<CategoryModel[]>();
  startedEditing = new Subject<number>();

  private categories: CategoryModel[] = [
  ];


  constructor() {
  }

  setCategories(categories: CategoryModel[]) {
    this.categories = categories;
    this.categoriesChanged.next(this.categories.slice());
  }

  editCategory(index: number, category: CategoryModel) {
    this.categories[index] = category;
  }

  getCategories() {
    return this.categories.slice();
  }

  getCategory(index: number) {
    return this.categories[index];
  }

  addCategory(category: CategoryModel) {
    this.categories.push(category);
    this.categoriesChanged.next(this.categories.slice());
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
    this.categoriesChanged.next(this.categories.slice());
  }

  updateCategory(index: number, newCategory: CategoryModel) {
    this.categories[index] = newCategory;
    this.categoriesChanged.next(this.categories.slice());
  }
}
