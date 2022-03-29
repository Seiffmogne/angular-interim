import { TestBed } from '@angular/core/testing';

import { SearchMissionService } from './search-mission.service';

describe('SearchMissionService', () => {
  let service: SearchMissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
