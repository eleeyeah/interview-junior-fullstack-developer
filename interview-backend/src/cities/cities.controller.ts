import { CitiesService } from './cities.service';
import { Controller, Get } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  CitiesService: any;
  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities() {
    return this.citiesService.getCities();
  }
}
