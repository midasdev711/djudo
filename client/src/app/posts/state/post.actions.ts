import { Action } from '@ngrx/store';
import { Post } from '@app/posts/posts';

export enum PostActionTypes {
    LOAD_POSTS = '[Post] Load Posts',
    LOAD_POSTS_SUCCESSFULLY = '[Post] Load Posts Successfully',
    LOAD_CATEGORIES = '[Post] Load Categories',
    SELECT_POST = '[Post] Select Post',
    SELECT_POST_SUCCESSFULLY = '[Post] Select Post Successfully'
}

export class LoadPostsAction implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsActionSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESSFULLY;
    constructor(public payload: Post[]) { }
}
export class SelectPostAction implements Action {
    readonly type = PostActionTypes.SELECT_POST;
    constructor(public payload: number) { }
}

export class SelectPostActionSuccess implements Action {
    readonly type = PostActionTypes.SELECT_POST_SUCCESSFULLY;
    constructor(public payload: Post) { }
}

export type PostActions = LoadPostsActionSuccess | SelectPostActionSuccess;
