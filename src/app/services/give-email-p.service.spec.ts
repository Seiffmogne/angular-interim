import { TestBed } from '@angular/core/testing';

import { GiveEmailPService } from './give-email-p.service';

describe('GiveEmailPService', () => {
  let service: GiveEmailPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiveEmailPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
