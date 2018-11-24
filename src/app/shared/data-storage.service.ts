import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {PostService} from '../posts/post.service';
import {Post} from '../posts/post.model';
import {AuthService} from '../auth/auth.service';
import {User} from './user.model';
import {UserListService} from '../user-list/user-list.service';
import {CategoryModel} from '../../models/category-model';
import {CategoryService} from '../../services/category-service';
import index from '@angular/cli/lib/cli';


@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private postService: PostService,
              private categoryService: CategoryService,
              private userService: UserListService,
              private authService: AuthService) {
  }

  storePosts() {
    const token = this.authService.getToken();

    return this.http.put('https://mini-piazza.firebaseio.com/posts.json?auth=' + token, this.postService.getPosts());
  }

  storeCategories() {
    const token = this.authService.getToken();
    return this.http.put('https://mini-piazza.firebaseio.com/categories.json?auth=' + token, this.categoryService.getCategories());
  }

  getPosts() {
    const token = this.authService.getToken();

    this.http.get('https://mini-piazza.firebaseio.com/posts.json?auth=' + token)
      .map(
        (response: Response) => {
          const posts: Post[] = response.json();
          return posts.reverse();
        }
      )
      .subscribe(
        (posts: Post[]) => {
          this.postService.setPosts(posts);
        }
      );
  }

  getCategories() {
    const token = this.authService.getToken();

    this.http.get('https://mini-piazza.firebaseio.com/categories.json?auth=' + token)
      .map(
        (response: Response) => {
          const categories: CategoryModel[] = response.json();
          return categories.reverse();
        }
      )
      .subscribe(
        (categories: CategoryModel[]) => {
          this.categoryService.setCategories(categories);
        }
      );
  }

  getUsers() {
    const token = this.authService.getToken();

    this.http.get('https://mini-piazza.firebaseio.com/users.json?auth=' + token)
      .map(
        (response: Response) => {
          const users: User[] = response.json();
          return users;
        }
      );
  }

  storeUsers() {
    const token = this.authService.getToken();

    return this.http.put('https://mini-piazza.firebaseio.com/users.json?auth=' + token, this.userService.getUsers());
  }
}
