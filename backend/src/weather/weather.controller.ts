import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { getWeatherModel } from './models/weather.model';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly service: WeatherService) {

  }
  @Get()
  async getWeatherForecast(@Query() params: getWeatherModel) {
    return this.service.getWeatherForecasts(params);

  }

}
