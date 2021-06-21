import { Test, TestingModule } from '@nestjs/testing';
import { FoodTrucksController } from './food-trucks.controller';

describe('FoodTrucksController', () => {
  let controller: FoodTrucksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodTrucksController],
    }).compile();

    controller = module.get<FoodTrucksController>(FoodTrucksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
