import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCityFilterModule } from './search-city-filter/search-city-filter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchCityFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
