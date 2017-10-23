import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports: [
    ...declarations,
    MaterialModule
  ]
})
export class PostsModule { }
