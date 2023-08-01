import { CitiesService } from './cities.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  CitiesService: any;
  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities(@Query('name_like') name_like: string) {
    return this.citiesService.getCities(name_like);
  }
}
