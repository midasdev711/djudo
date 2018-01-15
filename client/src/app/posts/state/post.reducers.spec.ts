import { Post, Category, Comment } from '@app/posts/posts';
import {PostActionTypes, PostActions, LoadPostsActionSuccess,} from '@app/posts/state/post.actions';
import { postReducers, INITIAL_STATE } from '@app/posts/state/post.reducers';
import {postListMock} from '@app/posts/mocks/post-list.mock';

describe('post reducer', () => {

  it('should return the initial state', () => {
    expect(postReducers(undefined, <any>{})).toEqual(INITIAL_STATE);
  });

  it('should get a list of posts', () => {
    expect(postReducers(<any>{}, new LoadPostsActionSuccess(postListMock)))
      .toEqual({ list: postListMock })
  });

});
