import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './posts/post.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostStartComponent } from './posts/post-start/post-start.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import {AppComponent} from './app.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizzComponent} from './quizz/quizz.component';
import {WelcomeComponent} from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'posts', component: PostComponent, children: [
    { path: '', component: PostStartComponent },
    { path: 'new', component: NewPostComponent, canActivate: [AuthGuard] },
    { path: ':id', component: PostDetailComponent, canActivate: [AuthGuard] },
  ] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'app', component: AppComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'quiz-list', component: QuizListComponent},
  { path: 'quiz', component: QuizzComponent,  children: [
      { path: ':id', component: QuizzComponent },

    ]},
  { path: 'welcome', component: WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
