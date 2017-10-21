import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { PostsState, postReducers } from '@app/posts/state/post.reducers';
import { CommentsState } from '@app/comments/comments';
import { commentsReducer } from '@app/comments/state/comment.reducers';

export interface AppState {
  posts: PostsState;
  comments: CommentsState;
}

export const ROOT_REDUCER = {
    posts: postReducers,
    comments: commentsReducer
}

export const META_REDUCERS = !environment.production
  ? [storeFreeze]
  : [];
