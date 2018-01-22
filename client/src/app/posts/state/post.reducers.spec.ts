import {
  LoadPostsActionSuccess,
  SelectPostActionSuccess,
} from '@app/posts/state/post.actions';
import {LoadCategoriesActionSuccess} from '@app/category/state/category.actions';
import {postReducers, INITIAL_STATE, PostsQuery} from '@app/posts/state/post.reducers';
import {postListMock, postMock} from '@app/posts/post.mock';
import {categoryListMock, categoryMock} from '@app/category/category.mocks';
import {AppStateMocks} from '@app/djudo.mocks';

describe('post reducer', (): void => {

  it('should return the initial state', (): void => {
    expect(postReducers(undefined, <any>{})).toEqual(INITIAL_STATE);
  });

  it('should get a list of posts', (): void => {
    expect(postReducers(<any>{}, new LoadPostsActionSuccess(postListMock)))
      .toEqual({list: postListMock});
  });

  it('should select a post', (): void => {
    expect(postReducers(<any>{}, new SelectPostActionSuccess(postMock)))
      .toEqual({post: postMock});
  });

});

describe('post query', (): void => {

  it('should retrieve a list of posts', (): void => {
    expect(PostsQuery.getPosts(AppStateMocks)).toEqual(postListMock);
  });

  it('should retrieve a post', (): void => {
    expect(PostsQuery.getPost(AppStateMocks)).toEqual(postMock);
  });

});
