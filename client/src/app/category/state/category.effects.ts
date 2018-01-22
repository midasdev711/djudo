import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Category} from '@app/posts/posts';
import {CategoryActionTypes, LoadCategoriesActionSuccess} from '@app/category/state/category.actions';
import {CategoryService} from '@app/category/category.service';

@Injectable()
export class CategoryEffects {

  constructor(private action$: Actions, private categoryService: CategoryService) {
  }

  @Effect() getCategories$ = this.action$
    .ofType(CategoryActionTypes.LOAD_CATEGORIES)
    .switchMap(() => this.categoryService.getCategories())
    .map((categories: Category[]) => new LoadCategoriesActionSuccess(categories));
}
