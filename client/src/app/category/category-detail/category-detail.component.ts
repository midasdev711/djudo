import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@app/state';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '@app/category/category';
import {SelectCategoryAction} from '@app/category/state/category.actions';
import {CategoryQuery} from '@app/category/state/category.reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'djudo-category-detail',
  templateUrl: 'category-detail.component.html',
  styleUrls: ['category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  category$: Observable<Category>;

  constructor(private store$: Store<AppState>,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params.id;
    this.store$.dispatch(new SelectCategoryAction(id));
    this.category$ = this.store$.select(CategoryQuery.getCategory);
  }

  getPost(id: number) {
    this.router.navigate(['posts', id]);
  }
}
