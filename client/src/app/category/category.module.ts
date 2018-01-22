import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';
import {Components} from '@app/shared/utils';

export const categoryComponents: Components = [
  CategoryListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...categoryComponents],
  exports: [...categoryComponents],
  providers: []
})
export class CategoryModule {
}
