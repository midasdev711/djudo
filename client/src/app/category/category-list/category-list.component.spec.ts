import {TestBed, ComponentFixture} from '@angular/core/testing';
import {CategoryListComponent} from '@app/category/category-list/category-list.component';
import {categoryComponents} from '@app/category/category.module';
import {baseSpecConfig} from '@app/shared/utils';

describe('Category List Component', () => {

  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  baseSpecConfig([], ...categoryComponents, [])

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
