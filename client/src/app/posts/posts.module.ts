import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MaterialModule } from '@app/shared/material/material.module';

const declarations = [
  PostListComponent,
  PostDetailComponent,
]

@NgModule({
  declarations: [
    ...declarations
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
