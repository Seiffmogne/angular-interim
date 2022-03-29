import { TestBed } from '@angular/core/testing';

import { AcceptMissionService } from './accept-mission.service';

describe('AcceptMissionService', () => {
  let service: AcceptMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
