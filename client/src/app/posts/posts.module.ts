import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from 'ngx-facebook';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { CommentsComponent } from '@app/posts/comments/comments.component';

const declarations = [
  PostListComponent,
  PostDetailComponent,
  CommentsComponent
]

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    MaterialModule,
    FacebookModule.forRoot(),
    CommonModule
  ],
  exports: [
    ...declarations,
    MaterialModule
  ]
})
export class PostsModule { }
