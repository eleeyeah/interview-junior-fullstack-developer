import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCityFilterInterface } from './search-city-filter.interface';



@Injectable({
  providedIn: 'root'
})
export class SearchCityFilterService {

  constructor(private http: HttpClient) { }

  getCities(searchValue: string): Observable<SearchCityFilterInterface[]> {
    return this.http.get<SearchCityFilterInterface[]>(`http://localhost:3000/cities?name_like=${searchValue}`);
  }
}
