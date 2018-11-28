import {appRoutes} from '@app/djudo.routes';
import {APP_BASE_HREF} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {async, TestBed} from '@angular/core/testing';
import {HomeComponent} from '@app/home/home.component';
import {PostsModule} from '@app/posts/posts.module';
import {ROOT_REDUCER} from '@app/djudo.token';
import {RouterModule} from '@angular/router';
import {CategoryModule} from '@app/category/category.module';

declare var beforeEach;

export function baseSpecConfig(imports: Array<any> = [], declarations: Array<any> = [], providers: Array<any> = []): void {
  beforeEach( async() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(ROOT_REDUCER),
        RouterModule.forRoot(appRoutes),
        PostsModule,
        CategoryModule,
        ...imports
      ],
      declarations: [
        HomeComponent,
        ...declarations
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        ...providers
      ]
    })
      .compileComponents();
  });
}

export type Components = Array<any>;
export type Modules = Array<any>;
