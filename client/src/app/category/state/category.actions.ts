import {Category} from '@app/category/category';
import {Action} from '@ngrx/store';

export const enum CategoryActionTypes {
  LOAD_CATEGORIES = '[Category] Load Categories',
  LOAD_CATEGORIES_SUCCESSFULLY = '[Category] Load Categories Successfully',
  SELECT_CATEGORIES = 'Category select Categories',
  SELECT_CATEGORIES_SUCCESSFULLY = 'Category select Categories Successfully',
}

export class LoadCategoriesAction implements Action {
  readonly type = CategoryActionTypes.LOAD_CATEGORIES;
}

export class LoadCategoriesActionSuccess implements Action {
  readonly type = CategoryActionTypes.LOAD_CATEGORIES_SUCCESSFULLY;

  constructor(public payload: Category[]) {
  }
}

export class SelectCategoryAction implements Action {
  readonly type = CategoryActionTypes.SELECT_CATEGORIES;

  constructor(public payload: number) {
  }
}

export class SelectCategoryActionSuccess implements Action {
  readonly type = CategoryActionTypes.SELECT_CATEGORIES_SUCCESSFULLY;

  constructor(public payload: Category) {
  }
}

export type CategoryActions = LoadCategoriesActionSuccess | SelectCategoryActionSuccess;
