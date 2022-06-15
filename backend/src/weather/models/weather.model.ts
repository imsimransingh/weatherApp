import { IsNotEmpty } from "class-validator";

export class getWeatherModel {
    @IsNotEmpty()
    zipcode: string;

    @IsNotEmpty()
    country: string;
}