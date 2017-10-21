import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiService} from '@app/shared/services/api.service';
import { Comment } from '@app/comments/comments';

@Injectable()
export class PostsService {

  constructor(private api: ApiService) { }

  postComment(id: number, data: Comment): Observable<Comment> {
    return this.api.post(`posts/${id}`, data);
  }

  putComment(id: number, data: Comment): Observable<Comment> {
    return this.api.put(`posts/${id}`, data);
  }

}
