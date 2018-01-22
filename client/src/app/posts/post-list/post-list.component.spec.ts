import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostListComponent} from './post-list.component';
import {CommentsComponent} from '@app/posts/comments/comments.component';
import {MaterialModule} from '@app/shared/material/material.module';
import {FacebookModule} from 'ngx-facebook';
import {TypeAheadComponent} from '@app/type-ahead/type-ahead.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsService} from '@app/posts/post.service';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCER} from '@app/state';
import {RouterModule} from '@angular/router';
import {appRoutes} from '@app/djudo.routes';
import {HomeComponent} from '@app/home/home.component';
import {PostsModule} from '@app/posts/posts.module';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsQuery} from '@app/posts/state/post.reducers';
import {CategoryModule} from '@app/category/category.module';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      imports: [
        PostsModule,
        BrowserAnimationsModule,
        MaterialModule,
        FacebookModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        CategoryModule,
        StoreModule.forRoot(ROOT_REDUCER),
        RouterModule.forRoot(appRoutes)
      ],
      providers: [
        PostsService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
