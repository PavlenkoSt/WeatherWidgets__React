import { CityWeather } from "../../../models/weather"

export type WeatherStateType = {
    citiesWeather: CityWeather[]
}

export enum WeatherActionTypes {
    SET_CITIES_WEATHER = 'SET_CITIES_WEATHER',
    ADD_CITY_WEATHER = 'ADD_CITY_WEATHER'
}

type SetWeatherListType = {
    type: WeatherActionTypes.SET_CITIES_WEATHER
    payload: CityWeather[]
}

type AddWeatherListType = {
    type: WeatherActionTypes.ADD_CITY_WEATHER
    payload: CityWeather
}

export type WeatherActionCreatorsType = 
    SetWeatherListType | 
    AddWeatherListType