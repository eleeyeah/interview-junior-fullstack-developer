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

  getCities(name_like?: string): any {
    if (name_like) {
      return this.cities.filter((city) =>
        city.cityName.toLowerCase().includes(name_like.toLowerCase()),
      );
    } else {
      return this.cities;
    }
  }
}
