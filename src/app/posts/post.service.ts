import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from './post.model';

@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();

  private posts: Post[] = [
  ];
// private dataStorageService: DataStorageService
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
    this.posts.splice(index, 1);
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postsChanged.next(this.posts.slice());
  }
}
