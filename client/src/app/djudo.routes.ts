import {Routes} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {HomeComponent} from '@app/home/home.component';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';
import {CategoryDetailComponent} from '@app/category/category-detail/category-detail.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id', component: CategoryDetailComponent},
  {path: '**', redirectTo: '', component: HomeComponent}
]
