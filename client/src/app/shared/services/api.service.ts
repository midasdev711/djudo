import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/djudo.token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl) { }

  get(url: string, id?: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${url}`)
      // .map((res: Response) => res);
  }

  post(url: string, data): Observable<any> {
    return this.http.post(`${this.apiUrl}/${url}`, data)
      // .map((res: Response) => res);
  }

  put(url: string, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${url}`, data)
      // .map((res: Response) => res);
  }
}
