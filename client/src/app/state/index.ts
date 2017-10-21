import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';
import { PostsState, postReducers } from '@app/posts/state/post.reducers';

export interface AppState {
  posts: PostsState;
}

export const ROOT_REDUCER = {
    posts: postReducers
}

export const META_REDUCERS = !environment.production
  ? [storeFreeze] : [];
