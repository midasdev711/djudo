import {Injectable} from '@angular/core';
import {ApiService} from '@app/shared/services/api.service';
import {Observable} from 'rxjs/Observable';
import {Category} from '@app/category/category';

@Injectable()
export class CategoryService {

  constructor(private api: ApiService) {
  }

  getCategories(): Observable<Category[]> {
    return this.api.get('categories/');
  }
}
