import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsInterface } from './search-city-filter.interface';



@Injectable({
  providedIn: 'root'
})
export class SearchCityFilterService {

  constructor(private http: HttpClient) { }

  getCities(searchValue: string, page: number, pageSize: number): Observable<ResultsInterface> {
    return this.http.get<ResultsInterface>(`http://localhost:3000/cities/filter?page=${page}&page_size=${pageSize}&name_like=${searchValue}`);
  }
}
