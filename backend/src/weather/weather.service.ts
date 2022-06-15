import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { getWeatherDto } from './dto/get-weather.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, NotFoundError } from 'rxjs';

const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const appid = '46fd586a882c85390e828997b6656ceb';

@Injectable()
export class WeatherService {
    constructor(private httpService: HttpService) { }

    async getWeatherForecasts(params: getWeatherDto) {
        try {
            const url = `${weatherApiUrl}zip=${params.zipcode},${params.country}&appid=${appid}`;
            const { data } = await firstValueFrom(this.httpService.get(url))
            if (data) {
                return {
                    "lon": data.coord.lon,
                    "lat": data.coord.lat,
                    "main": data.weather[0]?.main,
                    "description": data.weather[0]?.description,
                    "temp": data.main.temp,
                    "feels_like": data.main.feels_like,
                    "temp_min": data.main.temp_min,
                    "temp_max": data.main.temp_max,
                    "pressure": data.main.pressure,
                    "humidity": data.main.humidity,
                }
            } else {
                throw new HttpException({
                    status: HttpStatus.FORBIDDEN,
                    error: 'Something went wrong!',
                }, HttpStatus.NOT_FOUND);
                return NotFoundError;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Something went wrong!',
            }, HttpStatus.NOT_FOUND);
        }


    }



}
