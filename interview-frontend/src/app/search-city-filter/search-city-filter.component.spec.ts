import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityFilterComponent } from './search-city-filter.component';

describe('SearchCityFilterComponent', () => {
  let component: SearchCityFilterComponent;
  let fixture: ComponentFixture<SearchCityFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCityFilterComponent]
    });
    fixture = TestBed.createComponent(SearchCityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
