import { CitiesService } from './cities.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  CitiesService: any;
  constructor(private citiesService: CitiesService) {}

  //* Default Controller Path
  @Get('')
  getAllCities() {
    return this.citiesService.getAllCities();
  }

  // Get cities filtered by name
  @Get(':filter')
  getCities(
    @Query('name_like') name_like: string,
    @Query('page') page: number,
    @Query('page_size') page_size: number,
  ) {
    return this.citiesService.getCities(name_like, page, page_size);
  }
}
