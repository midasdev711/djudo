import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './djudo.component';
import {HeaderComponent} from '@app/header/header.component';
import {NavComponent} from '@app/nav/nav.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '@app/djudo.routes';
import {HomeComponent} from '@app/home/home.component';
import {PostsModule} from '@app/posts/posts.module';
import {FooterComponent} from '@app/footer/footer.component';
import {APP_BASE_HREF} from '@angular/common';
import {MaterialModule} from '@app/shared/material/material.module';
import {PostsService} from '@app/posts/post.service';
import {TypeAheadService} from '@app/type-ahead/type-ahead.service';
import {StoreModule} from '@ngrx/store';
import {ROOT_REDUCER} from '@app/state';
import {ApiService} from '@app/shared/services/api.service';
import {API_URL} from '@app/djudo.token';
import {environment} from '../environments/environment';
import {CategoryModule} from '@app/category/category.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        HomeComponent,
        FooterComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        PostsModule,
        MaterialModule,
        StoreModule.forRoot(ROOT_REDUCER),
        CategoryModule
      ],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }, PostsService,
        TypeAheadService,
        ApiService,
        {provide: API_URL, useValue: `${environment.baseUrl}/api`}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
