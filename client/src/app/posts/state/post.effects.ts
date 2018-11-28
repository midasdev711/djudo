import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { PostsService } from '@app/posts/post.service';
import {PostActionTypes, LoadPostsActionSuccess, SelectPostActionSuccess, SelectPostAction} from '@app/posts/state/post.actions';
import { Post } from '@app/posts/posts';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PostEffects {
    constructor(
        private postsService: PostsService,
        private action$: Actions) { }

    @Effect() getPosts$ = this.action$
        .ofType(PostActionTypes.LOAD_POSTS)
        .switchMap(() => this.postsService.getPosts())
        .map((posts: Post[]) => new LoadPostsActionSuccess(posts));

    @Effect() selectPost$ = this.action$
        .ofType(PostActionTypes.SELECT_POST)
        .map((action: SelectPostAction) => action.payload)
        .switchMap((id: number) => this.postsService.getPost(id))
        .map((post: Post) => new SelectPostActionSuccess(post));
}
