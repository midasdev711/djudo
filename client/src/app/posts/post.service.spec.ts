import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from '@app/posts/post.service';
import {ApiService} from '@app/shared/services/api.service';
import {API_URL} from '@app/djudo.token';
import {environment} from '../../environments/environment';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        PostsService,
        ApiService,
        { provide: API_URL, useValue: `${environment.baseUrl}/api` }
      ]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
