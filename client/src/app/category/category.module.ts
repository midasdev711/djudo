import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';

export const categoryComponents = [
  CategoryListComponent
]

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
