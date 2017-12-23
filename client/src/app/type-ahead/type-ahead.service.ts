import { Injectable } from '@angular/core';
import {ApiService} from '@app/shared/services/api.service';
import {Observable} from 'rxjs/Observable';
import {Post} from '@app/posts/posts';

@Injectable()
export class TypeAheadService {

  constructor(private api: ApiService) {}

  searchFor(term: string): Observable<Post[]> {
    return this.api.get(`posts/?search=${term}`)
  }
}
