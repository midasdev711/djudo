import {TestBed, ComponentFixture} from '@angular/core/testing';
import {CategoryDetailComponent} from '@app/category/category-detail/category-detail.component';
import {categoryComponents} from '@app/category/category.module';
import {baseSpecConfig} from '@app/shared/utils';

describe('Category Detail Component', () => {

  let component: CategoryDetailComponent;
  let fixture: ComponentFixture<CategoryDetailComponent>;

  baseSpecConfig();

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
