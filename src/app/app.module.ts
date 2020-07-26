import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { EditCommentComponent } from './comments/edit-comment/edit-comment.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsListComponent,
    EditCommentComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
