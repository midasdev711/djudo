import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostDetailComponent} from './post-detail.component';
import {FacebookModule} from 'ngx-facebook';
import {MaterialModule} from '@app/shared/material/material.module';
import {PostsService} from '@app/posts/post.service';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCER} from '@app/state';
import {RouterModule} from '@angular/router';
import {appRoutes} from '@app/djudo.routes';
import {HomeComponent} from '@app/home/home.component';
import {PostsModule} from '@app/posts/posts.module';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        PostsModule,
        BrowserAnimationsModule,
        FacebookModule.forRoot(),
        MaterialModule,
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
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
