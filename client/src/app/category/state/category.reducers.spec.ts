import {
  CategoryActionTypes, LoadCategoriesActionSuccess,
  SelectCategoryActionSuccess
} from '@app/category/state/category.actions';
import {CategoryQuery, categoryReducer} from '@app/category/state/category.reducers';
import {categoryListMock, categoryMock} from '@app/category/category.mocks';
import {AppStateMocks} from '@app/djudo.mocks';

describe('Category Reducers', (): void => {

  it('should get a list of categories', (): void => {
    expect(categoryReducer(<any>{}, new LoadCategoriesActionSuccess(categoryListMock)))
      .toEqual({categoryList: categoryListMock});
  });

  it('should select a category', (): void => {
    expect(categoryReducer(<any>{}, new SelectCategoryActionSuccess(categoryMock)))
      .toEqual({category: categoryMock});
  });

});

describe('CategoryQuery', (): void => {

  it('should retrieve a list of categories', (): void => {
    expect(CategoryQuery.getCategories(AppStateMocks)).toEqual(categoryListMock);
  });

});
