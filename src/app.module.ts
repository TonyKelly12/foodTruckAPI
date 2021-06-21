import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodTrucksController } from './food-trucks/food-trucks.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, FoodTrucksController],
  providers: [AppService, UserService],
})
export class AppModule {}
