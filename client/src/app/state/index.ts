import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../../environments/environment';
import {PostsState, postReducers} from '@app/posts/state/post.reducers';
import {typeAheadReducer, TypeAheadState} from '@app/type-ahead/type-ahead.reducers';

export interface AppState {
  posts: PostsState;
  typeAhead: TypeAheadState;
}

export const ROOT_REDUCER = {
  posts: postReducers,
  typeAhead: typeAheadReducer
}

export const META_REDUCERS = !environment.production
  ? [storeFreeze] : [];
