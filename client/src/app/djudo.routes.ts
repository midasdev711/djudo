import {Routes} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {HomeComponent} from '@app/home/home.component';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: '**', redirectTo: '', component: HomeComponent}
]
