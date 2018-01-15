import { Post, Category, Comment } from '@app/posts/posts';
import {
  PostActionTypes, PostActions, LoadPostsActionSuccess,
  LoadCategoriesActionSuccess, SelectPostActionSuccess,
} from '@app/posts/state/post.actions';
import {postReducers, INITIAL_STATE, PostsQuery} from '@app/posts/state/post.reducers';
import {postListMock, postMock} from '@app/posts/mocks/post.mock';
import {categoryListMock} from '@app/posts/mocks/category.mocks';

describe('post reducer', (): void => {

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

  it('should select a post', (): void => {
    expect(postReducers(<any>{}, new SelectPostActionSuccess(postMock)))
      .toEqual({ post: postMock });
  });

});

describe('post query', (): void => {

  const AppState = {
    posts: {
      list: postListMock,
      post: postMock,
      categories: categoryListMock
    },
    typeAhead: { searchResults: postListMock }
  };

  it('should retrieve a list of posts', (): void => {
    expect(PostsQuery.getPosts(AppState)).toEqual(postListMock);
  });

  it('should retrieve a post', (): void => {
    expect(PostsQuery.getPost(AppState)).toEqual(postMock);
  });

  it('should retrieve a list of categories', (): void => {
    expect(PostsQuery.getCategories(AppState)).toEqual(categoryListMock);
  });

});
