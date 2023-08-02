import { CitiesService } from './cities.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';

describe('CitiesController', () => {
  let controller: CitiesController;

  const mockCitiesService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    })
      .overrideProvider(CitiesService)
      .useValue(mockCitiesService)
      .compile();

    controller = module.get<CitiesController>(CitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
