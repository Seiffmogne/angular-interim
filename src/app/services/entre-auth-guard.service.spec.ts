import { TestBed } from '@angular/core/testing';

import { EntreAuthGuardService } from './entre-auth-guard.service';

describe('EntreAuthGuardService', () => {
  let service: EntreAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntreAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
