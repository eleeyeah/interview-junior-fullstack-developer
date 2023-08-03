
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
  page = 1; // The current page number
  numberOfButtons = 0;
  pageSize = 5; //* Decide how many cities to display per page


  // The cities to display
  cities: SearchCityFilterInterface[] = [];
  citiesCount = 0;

  // The form for the search input
  searchForm = this.fb.nonNullable.group({searchValue: '',})


  constructor(
    private searchCityFilterService: SearchCityFilterService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {}


 // Fetch cities from the API
fetchCities(page: number): void {
  // Reset cities
  this.cities = [];

  // Get cities from the API
  this.searchCityFilterService.getCities(this.searchValue, page, this.pageSize).subscribe({
    next: (response) => {
      // console.log(response); // The entire response object from NestJS

      if (response) {
        this.cities = response.results;
        this.citiesCount = response.resultCount;
        this.numberOfButtons = Math.ceil(this.citiesCount / this.pageSize);
      } else {
        this.cities = [];
        this.citiesCount = 0;
        this.numberOfButtons = 0;
      }
    },
    error: (error) => {
      console.error('Error fetching data:', error);
      this.cities = [];
      this.citiesCount = 0;
      this.numberOfButtons = 0;
    }
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
    this.fetchCities(1);
  }

  // Handle the page change
  getButtonRange(): number[] {
    return Array(this.numberOfButtons).fill(0).map((_, i) => i + 1);
  }
}
