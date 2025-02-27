import { TestBed } from '@angular/core/testing';

import { PostHttpClientService } from './post-http-client.service';

describe('PostHttpClientService', () => {
  let service: PostHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
