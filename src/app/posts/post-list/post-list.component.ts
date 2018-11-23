import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {Post} from '../post.model';
import {PostService} from '../post.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute,
              public  authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  sortByName() {
    this.posts.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;

    });
    console.log(this.posts);
  }

  sortByDate() {
    this.posts.sort(function (a, b) {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
