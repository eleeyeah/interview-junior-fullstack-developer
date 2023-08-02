import { CitiesService } from './cities.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  CitiesService: any;
  constructor(private citiesService: CitiesService) {}

  // Get cities filtered by name
  @Get()
  getCities(
    @Query('name_like') name_like: string,
    @Query('page') page: number,
  ) {
    return this.citiesService.getCities(name_like, page);
  }
}
