import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import {User} from '../../shared/user.model';
import {UserListService} from '../user-list.service';
import {CategoryModel} from '../../../models/category-model';
import {CategoryService} from '../../../services/category-service';
import {Post} from '../../posts/post.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: CategoryModel;

  constructor(private slService: CategoryService, private  dataStorage: DataStorageService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getCategory(index);
          this.slForm.setValue({
            name: this.editedItem.name
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteCategory(this.editedItemIndex);
    this.onClear();
    this.dataStorage.storeCategories()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onEdit() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    this.slService.editCategory(this.editedItemIndex, new User(name));
  }

  onAdd() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const category = new CategoryModel(name);
    this.slService.addCategory(category);
    this.dataStorage.storeCategories()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
