import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Post } from './post.model';
import { UserListService } from '../user-list/user-list.service';

@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
    ];

  constructor() {}

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  getPosts() {
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.postsChanged.next(this.posts.slice());
  }
  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    this.posts.slice(index, 1);

  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts.slice());
  }
}
