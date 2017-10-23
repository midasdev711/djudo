import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post, Category } from '../../../posts/posts';
import {ApiService} from '@app/shared/services/api.service';

@Injectable()
export class PostsService {

  constructor(private api: ApiService) { }

  getPosts(): Observable<Post[]> {
    return this.api.get('posts')
  }

  getPost(id): Observable<Post> {
    return this.api.get(`posts/${id}`)
  }

  getCategories(): Observable<Category[]> {
    return this.api.get('categories')
  }

  postComment(id: number, data: Comment): Observable<Comment> {
    return this.api.post(`posts/${id}`, data);
  }

  putComment(id: number, data: Comment): Observable<Comment> {
    return this.api.put(`posts/${id}`, data);
  }

}
