import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from 'ngx-facebook';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CommentsComponent } from '@app/posts/comments/comments.component';
import {TypeAheadComponent} from '@app/type-ahead/type-ahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const declarations = [
  PostListComponent,
  PostDetailComponent,
  CommentsComponent,
  TypeAheadComponent
]

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    MaterialModule,
    FacebookModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    ...declarations,
    MaterialModule
  ]
})
export class PostsModule { }
