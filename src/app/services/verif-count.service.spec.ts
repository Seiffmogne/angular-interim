import { TestBed } from '@angular/core/testing';

import { VerifCountService } from './verif-count.service';

describe('VerifCountService', () => {
  let service: VerifCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
