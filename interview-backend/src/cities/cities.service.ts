import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitiesService {
  private cities: any;

  constructor() {
    const filePath = path.resolve(__dirname, '../../../cities.json');
    this.cities = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  getCities(name_like: string, page = 1, limit = 5): any {
    let results: any[];

    if (name_like) {
      results = this.cities.filter((city: { cityName: string }) =>
        city.cityName.toLowerCase().includes(name_like.toLowerCase()),
      );
      results = results.map((city) => {
        // Highlight the letters in the city name that match the search input
        const regex = new RegExp(`(${name_like})`, 'giu');
        city.cityName = city.cityName.replace(regex, '<strong>$1</strong>');
        return city;
      });
    } else {
      results = this.cities;
    }

    // Calculate start and end index for pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Return only the portion of results for this page
    return results.slice(startIndex, endIndex);
  }
}
