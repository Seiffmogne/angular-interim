import { TestBed } from '@angular/core/testing';

import { WebReqIntercepterService } from './web-req-intercepter.service';

describe('WebReqIntercepterService', () => {
  let service: WebReqIntercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebReqIntercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
