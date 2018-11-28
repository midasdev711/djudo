import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {appRoutes} from './djudo.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {META_REDUCERS, rootReducer} from '@app/state';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from '@app/shared/material/material.module';
import { AppComponent } from './djudo.component';
import { PostsService } from '@app/posts/post.service';
import { PostEffects } from '@app/posts/state/post.effects';
import {API_URL, ROOT_REDUCER} from './djudo.token';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {PostsModule} from '@app/posts/posts.module';
import {ApiService} from '@app/shared/services/api.service';
import {TypeAheadEffects} from '@app/type-ahead/type-ahead.effects';
import {TypeAheadService} from '@app/type-ahead/type-ahead.service';
import {CategoryModule} from '@app/category/category.module';
import {CategoryEffects} from '@app/category/state/category.effects';
import {CategoryService} from '@app/category/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoryModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER, {
      metaReducers: META_REDUCERS,
    }),
    EffectsModule.forRoot([PostEffects, TypeAheadEffects, CategoryEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 5 }) : [],
    PostsModule
  ],
  providers: [
    PostsService,
    TypeAheadService,
    CategoryService,
    ApiService,
    { provide: API_URL, useValue: `${environment.baseUrl}/api` },
    { provide: ROOT_REDUCER, useValue: rootReducer() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
