import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCityFilterComponent } from './search-city-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchCityFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchCityFilterComponent
  ],

})
export class SearchCityFilterModule { }
