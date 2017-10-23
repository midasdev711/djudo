import {Routes} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {HomeComponent} from '@app/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'posts', component: PostListComponent },
    { path: 'posts/:id', component: PostDetailComponent },
    { path: '**', redirectTo: '', component: HomeComponent }
]
