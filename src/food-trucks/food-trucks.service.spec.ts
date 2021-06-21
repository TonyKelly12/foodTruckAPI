import { Test, TestingModule } from '@nestjs/testing';
import { FoodTrucksService } from './food-trucks.service';

describe('FoodTrucksService', () => {
  let service: FoodTrucksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodTrucksService],
    }).compile();

    service = module.get<FoodTrucksService>(FoodTrucksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
