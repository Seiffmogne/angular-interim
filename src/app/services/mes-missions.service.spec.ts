import { TestBed } from '@angular/core/testing';

import { MesMissionsService } from './mes-missions.service';

describe('MesMissionsService', () => {
  let service: MesMissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesMissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
