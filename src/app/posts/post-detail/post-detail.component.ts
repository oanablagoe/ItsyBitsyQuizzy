import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Post} from '../post.model';
import { PostService } from '../post.service';
import {AuthService} from '../../auth/auth.service';
import {CategoryService} from '../../../services/category-service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id: number;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private category: CategoryService,
              private router: Router,
              public authService: AuthService) {
  }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.post = this.postService.getPost(this.id);
        }
      );
  }
  onDelete() {
    console.log('asss');
    this.postService.deletePost(this.post);
  }

  onModify() {
    this.router.navigate(['/posts/new']);

  }
}
