import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './posts/post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserListService } from './user-list/user-list.service';
import { AppRoutingModule } from './app-routing.module';
import { PostStartComponent } from './posts/post-start/post-start.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { PostService } from './posts/post.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { QuestionsComponent } from './questions/questions.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('Your-Facebook-app-id')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('Your-Google-Client-Id')
      },
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider('1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com')
      },
    ]
);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostDetailComponent,
    PostItemComponent,
    UserListComponent,
    UserEditComponent,
    DropdownDirective,
    PostStartComponent,
    NewPostComponent,
    SignupComponent,
    SigninComponent,
    QuestionsComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [UserListService, PostService, DataStorageService, AuthService, AuthGuard,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
