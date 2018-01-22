import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Category} from '@app/category/category';
import {
  CategoryActionTypes, LoadCategoriesActionSuccess,
  SelectCategoryActionSuccess
} from '@app/category/state/category.actions';
import {CategoryService} from '@app/category/category.service';

@Injectable()
export class CategoryEffects {

  constructor(private action$: Actions, private categoryService: CategoryService) {
  }

  @Effect() getCategories$ = this.action$
    .ofType(CategoryActionTypes.LOAD_CATEGORIES)
    .switchMap(() => this.categoryService.getCategories())
    .map((categories: Category[]) => new LoadCategoriesActionSuccess(categories));

  @Effect() getCategory$ = this.action$
    .ofType(CategoryActionTypes.SELECT_CATEGORIES)
    .map(toPayload)
    .switchMap(id => this.categoryService.getCategory(id))
    .map(category => new SelectCategoryActionSuccess(category));
}
