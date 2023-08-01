import { SearchCityFilterInterface } from './search-city-filter.interface';
import { SearchCityFilterService } from './search-city-filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-city-filter',
  templateUrl: './search-city-filter.component.html',
  styleUrls: ['./search-city-filter.component.scss']
})
export class SearchCityFilterComponent implements OnInit {

  searchValue= '';
  cities: SearchCityFilterInterface[] = [];

  constructor(private searchCityFilterService: SearchCityFilterService) { }

  ngOnInit(): void {
    this.fetchCities();
  }

  fetchCities(): void {
    this.searchCityFilterService.getCities(this.searchValue).subscribe((cities) => {
      this.cities = cities;
    });
  }

}
