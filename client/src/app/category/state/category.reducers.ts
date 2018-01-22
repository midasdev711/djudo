import {CategoryActions, CategoryActionTypes} from '@app/category/state/category.actions';
import {Category} from '@app/category/category';
import {AppState} from '@app/state';

export interface CategoryState {
  categoryList: Category[];
  category: Category;
}

export const categoryInitialState = {
  categoryList: [
    {
      id: 0,
      title: '',
      slug: '',
      posts: []
    }
  ],
  category: {
    id: 0,
    title: '',
    slug: '',
    posts: []
  }
}

export const categoryReducer = (state: CategoryState = categoryInitialState, action: CategoryActions) => {
  switch (action.type) {
    case CategoryActionTypes.LOAD_CATEGORIES_SUCCESSFULLY:
      return {...state, categoryList: action.payload};
    case CategoryActionTypes.SELECT_CATEGORIES_SUCCESSFULLY:
      return {...state, category: action.payload};
  }
}

export namespace CategoryQuery {
  export const getCategories = (state: AppState) => state.categories.categoryList;
}
