import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post, Category } from '../../../posts/post-list/posts';
import {ApiService} from '@app/shared/services/api.service';

@Injectable()
export class PostsService {

  constructor(private api: ApiService) { }

  getPosts(): Observable<Post[]> {
    return this.api.getItems('posts')
  }

  getPost(id): Observable<Post> {
    return this.api.getItem('posts', id)
  }

  getCategories(): Observable<Category[]> {
    return this.api.getItems('categories')
  }

}
