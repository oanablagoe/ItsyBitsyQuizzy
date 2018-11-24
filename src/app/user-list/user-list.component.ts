import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {User} from '../shared/user.model';
import {UserListService} from './user-list.service';
import {Response} from '@angular/http';
import {DataStorageService} from '../shared/data-storage.service';
import {CategoryService} from '../../services/category-service';
import {CategoryModel} from '../../models/category-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  categories: CategoryModel[];
  private subscription: Subscription;

  constructor(private categoryListService: CategoryService,
              private dataStorageService: DataStorageService,
              private  router: Router) {
  }

  ngOnInit() {
    this.dataStorageService.getCategories();
    this.subscription = this.categoryListService.categoriesChanged
      .subscribe(
        (categories: CategoryModel[]) => {
          this.categories = categories;
        }
      );
  }

  onEditItem(index: number) {
    this.categoryListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeCategories()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  goToQuiz() {
    this.router.navigate(['/questions']);
  }

  onFetchData() {
    this.dataStorageService.getCategories();
  }
}
