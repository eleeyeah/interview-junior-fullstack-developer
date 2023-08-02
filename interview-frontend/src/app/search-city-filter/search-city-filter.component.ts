
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
  // The value entered into the search input
  searchValue= '';

  // The cities to display
  cities: SearchCityFilterInterface[] = [];

  // The form for the search input
  searchForm = this.fb.nonNullable.group({searchValue: '',})


  constructor(
    private searchCityFilterService: SearchCityFilterService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {}

  // Fetch cities from the API
  fetchCities(): void {
    // Reset cities
    this.cities = [];

    // Get cities from the API
    this.searchCityFilterService.getCities(this.searchValue).subscribe((cities) => {
      this.cities = cities;
    });
  }

  // Handle the form submission
  onSearchSubmit(): void {
    // Get the search value from the form
    this.searchValue = this.searchForm.value.searchValue || '';

    // Trim the search value to remove leading and trailing whitespace
    this.searchValue = this.searchValue.trim();

    // Check if the search value is empty
    if (this.searchValue === '') {
      // If the search value is empty, reset cities and return early
      this.cities = [];
      return;
    }

    // If the search value is not empty, fetch cities from the API
    this.fetchCities();
  }
}
