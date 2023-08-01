import { TestBed } from '@angular/core/testing';

import { SearchCityFilterService } from './search-city-filter.service';

describe('SearchCityFilterService', () => {
  let service: SearchCityFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCityFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
