import { CityWeather } from "../../../models/weather"

export type WeatherStateType = {
    citiesWeather: CityWeather[]
}

export enum WeatherActionTypes {
    SET_SITIES_WEATHER = 'SET_SITIES_WEATHER'
}

type SetWeatherList = {
    type: WeatherActionTypes.SET_SITIES_WEATHER
    payload: CityWeather[]
}

export type WeatherActionCreatorsType = 
    SetWeatherList