import { Injectable } from '@nestjs/common';

@Injectable()
export class CitiesService {
  private cities = [
    { id: 1, cityName: 'Paris', count: 300 },
    { id: 2, cityName: 'London', count: 200 },
    { id: 3, cityName: 'New York', count: 100 },
    { id: 4, cityName: 'Berlin', count: 50 },
    { id: 5, cityName: 'Tokyo', count: 30 },
    { id: 6, cityName: 'Madrid', count: 20 },
    { id: 7, cityName: 'Rome', count: 10 },
  ];

  getCities(name_like: string) {
    if (name_like) {
      return this.cities.filter((city) =>
        city.cityName.toLowerCase().includes(name_like.toLowerCase()),
      );
    } else {
      return this.cities;
    }
  }
}
