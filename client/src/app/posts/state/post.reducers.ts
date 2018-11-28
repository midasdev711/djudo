import {Post} from '@app/posts/posts';
import {PostActionTypes, PostActions} from '@app/posts/state/post.actions';
import {AppState} from '@app/state/index';

export interface PostsState {
  list: Post[];
  post: Post;
}

export const INITIAL_STATE: PostsState = {
  list: [],
  post: {
    id: 0,
    title: '',
    slug: '',
    description: '',
    body: '',
    published: false,
    created: null,
    category: '',
    comments: []

  }
};

export function postReducers(state: PostsState = INITIAL_STATE, action: PostActions): PostsState {
  switch (action.type) {
    case PostActionTypes.LOAD_POSTS_SUCCESSFULLY:
      return {...state, list: action.payload};
    case PostActionTypes.SELECT_POST_SUCCESSFULLY:
      return {...state, post: action.payload};
    default:
      return state;
  }
}

export namespace PostsQuery {
  export const getPosts = (state: AppState) => state.posts.list;
  export const getPost = (state: AppState) => state.posts.post;
}
