export interface SearchCityFilterInterface {
  id: string;
  cityName: string;
  count: number;
 }

 export interface ResultsInterface {
  results: SearchCityFilterInterface[];
  resultCount: number;
 }
