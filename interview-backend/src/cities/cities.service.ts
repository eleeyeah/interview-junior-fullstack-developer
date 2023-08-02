import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitiesService {
  private cities: any;

  constructor() {
    // Load the cities.json file into memory
    const filePath = path.resolve(__dirname, '../../../cities.json');
    this.cities = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getCities(name_like: string, page = 1, limit = 5): any {
    let results: any[];

    if (name_like) {
      // Filter the cities based on the name_like parameter
      results = this.cities.filter((city: { cityName: string }) => {
        return city.cityName.toLowerCase().includes(name_like.toLowerCase());
      });

      // Highlight the letters in the city name that match the search input
      const regex = new RegExp(`(${name_like})`, 'giu');
      results = results.map((city) => {
        const cityCopy = { ...city }; //* Create a deep copy of the city object to avoid mutating the original
        cityCopy.cityName = city.cityName.replace(regex, '<strong>$1</strong>');
        return cityCopy;
      });
    } else {
      // If there is no name_like parameter, return all cities
      results = this.cities;
    }

    // Calculate start and end index for pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Return only the portion of results for this page
    const paginatedResults = results.slice(startIndex, endIndex);
    console.log('paginatedResults:', paginatedResults); // This will print the paginated results

    return paginatedResults;
  }
}
