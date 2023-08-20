import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitiesService {
  private cities: any;
  private resultCount: number;

  constructor() {
    // Load the cities.json file into memory
    const filePath = path.resolve(__dirname, '../../../cities.json');
    this.cities = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  // Returns true if the string starts with the prefix, ignoring case
  private startsWithIgnoreCase(str: string, prefix: string): boolean {
    return str.toLowerCase().startsWith(prefix.toLowerCase());
  }

  // Returns an array of cities matching the name_like parameter
  getCities(name_like: string, page: number, pageSize: number): any {
    let results: any[];

    if (name_like) {
      // Filter the cities based on the name_like parameter using the custom startsWithIgnoreCase function
      results = this.cities.filter((city: { cityName: string }) => {
        return this.startsWithIgnoreCase(city.cityName, name_like);
      });

      this.resultCount = results.length;

      // Highlight the letters in the city name that match the search input
      const regex = new RegExp(`(${name_like})`, 'giu');
      results = results.map((city) => {
        const cityCopy = { ...city }; //* Create a deep copy of the city object to avoid mutating the original object
        cityCopy.cityName = city.cityName.replace(regex, '<strong>$1</strong>');
        return cityCopy;
      });
    } else {
      results = this.cities;
    }

    // Calculate start and end index for pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Return only the portion of results for this page
    const paginatedResults = results.slice(startIndex, endIndex);
    console.log('paginatedResults:', paginatedResults); // This will print the paginated results

    return {
      results: paginatedResults,
      resultCount: this.resultCount,
    };
  }

  getAllCities() {
    console.log(this.cities);
    return this.cities;
  }
}
