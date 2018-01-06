import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CommentsComponent } from '@app/posts/comments/comments.component';
import {TypeAheadComponent} from '@app/type-ahead/type-ahead.component';

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
    ReactiveFormsModule,
    FormsModule,
    FacebookModule.forRoot(),
    CommonModule
  ],
  exports: [
    ...declarations,
    MaterialModule
  ]
})
export class PostsModule { }
