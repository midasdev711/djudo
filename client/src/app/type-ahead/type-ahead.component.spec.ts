import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeAheadComponent} from './type-ahead.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@app/shared/material/material.module';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCER} from '@app/state';
import {HomeComponent} from '@app/home/home.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '@app/djudo.routes';
import {PostsModule} from '@app/posts/posts.module';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        PostsModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(ROOT_REDUCER)
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
