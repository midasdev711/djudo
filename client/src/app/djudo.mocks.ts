import {postListMock, postMock} from '@app/posts/post.mock';
import {categoryListMock, categoryMock} from '@app/category/category.mocks';

export const AppStateMocks = {
  posts: {
    list: postListMock,
    post: postMock,
    categories: categoryListMock
  },
  typeAhead: {searchResults: postListMock},
  categories: {
    categoryList: categoryListMock,
    category: categoryMock
  }
};
