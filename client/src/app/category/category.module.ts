import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';
import {Components} from '@app/shared/utils';
import {CategoryDetailComponent} from '@app/category/category-detail/category-detail.component';

export const categoryComponents: Components = [
  CategoryListComponent,
  CategoryDetailComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...categoryComponents],
  exports: [...categoryComponents]
})
export class CategoryModule {
}
