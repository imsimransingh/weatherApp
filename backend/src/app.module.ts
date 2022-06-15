import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './weather/weather.service';

import { WeatherModule } from './weather/weather.module';
@Module({
  imports: [HttpModule,WeatherModule],
  controllers: [AppController],
  providers: [AppService, WeatherService],
})
export class AppModule {}
