import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '@app/djudo.token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl) { }

  getItems(url): Observable<any> {
    return this.http.get(`${this.apiUrl}/${url}/`)
      .map((res: Response) => res);
  }

  getItem(url, id): Observable<any> {
    return this.http.get(`${this.apiUrl}/${url}/${id}/`)
      .map((res: Response) => res);
  }

  post(url, data): Observable<any> {
    return this.http.post(`${this.apiUrl}/${url}`, data)
      .map((res: Response) => res);
  }

  put(url, data): Observable<any> {
    return this.http.put(`${this.apiUrl}/${url}`, data)
      .map((res: Response) => res);
  }
}
