import { Post, Category, Comment } from '@app/posts/posts';
import {
  PostActionTypes, PostActions, LoadPostsActionSuccess,
  LoadCategoriesActionSuccess,
} from '@app/posts/state/post.actions';
import { postReducers, INITIAL_STATE } from '@app/posts/state/post.reducers';
import {postListMock} from '@app/posts/mocks/post-list.mock';
import {categoryListMock} from '@app/posts/mocks/category.mocks';

describe('post reducer', () => {

  it('should return the initial state', (): void => {
    expect(postReducers(undefined, <any>{})).toEqual(INITIAL_STATE);
  });

  it('should get a list of posts', (): void => {
    expect(postReducers(<any>{}, new LoadPostsActionSuccess(postListMock)))
      .toEqual({ list: postListMock });
  });

  it('should get a list of categories', (): void => {
    expect(postReducers(<any>{}, new LoadCategoriesActionSuccess(categoryListMock)))
      .toEqual({ categories: categoryListMock });
  });

});
