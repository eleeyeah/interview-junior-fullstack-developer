import { Module } from '@nestjs/common';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

@Module({
  // The module that provides the service
  controllers: [CitiesController],
  // The service that the module provides
  providers: [CitiesService],
})
export class CitiesModule {}
