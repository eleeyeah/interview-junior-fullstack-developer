import { SearchCityFilterInterface } from './search-city-filter.interface';
import { SearchCityFilterService } from './search-city-filter.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-city-filter',
  templateUrl: './search-city-filter.component.html',
  styleUrls: ['./search-city-filter.component.scss']
})
export class SearchCityFilterComponent implements OnInit {

  searchValue= '';
  cities: SearchCityFilterInterface[] = [];
  searchForm = this.fb.nonNullable.group({searchValue: '',})


  constructor(
    private searchCityFilterService: SearchCityFilterService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {}

  fetchCities(): void {

    this.cities = []; // reset cities

    this.searchCityFilterService.getCities(this.searchValue).subscribe((cities) => {
      this.cities = cities;
    });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue || '';
    this.fetchCities();

  }

}
