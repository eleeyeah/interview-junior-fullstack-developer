import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let controller: CitiesController;
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [CitiesService],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    service = module.get<CitiesService>(CitiesService);
  });

  describe('getCities', () => {
    it('should return an array of cities', async () => {
      const mockCities = [
        { id: 1, name: 'City A' },
        { id: 2, name: 'City B' },
      ];
      jest
        .spyOn(service, 'getCities')
        .mockImplementation(async () => mockCities);

      const queryParams = { name_like: 'City', page: 1, pageSize: 10 };
      const result = await controller.getCities(
        queryParams.name_like,
        queryParams.page,
        queryParams.pageSize,
      );

      expect(service.getCities).toHaveBeenCalledWith(
        queryParams.name_like,
        queryParams.page,
        queryParams.pageSize,
      );
      expect(result).toEqual(mockCities);
    });
  });
});
