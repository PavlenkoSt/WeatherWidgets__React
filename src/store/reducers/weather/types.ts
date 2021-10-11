import { CityWeather } from "../../../models/weather"


export type WeatherStateType = {
    citiesWeather: CityWeather[]
}

export enum WeatherActionTypes {
    SET_CITIES_WEATHER = 'SET_CITIES_WEATHER',
    ADD_CITY_WEATHER = 'ADD_CITY_WEATHER',
    REMOVE_CITY_WEATHER = 'REMOVE_CITY_WEATHER',
    CHANGE_SCALE_WEATHER = 'CHANGE_SCALE_WEATHER',
    REFETCH_WEATHER = 'REFETCH_WEATHER',
    FETCH_WEATHER_GEO = 'FETCH_WEATHER_GEO'
}

type SetWeatherListType = {
    type: WeatherActionTypes.SET_CITIES_WEATHER
    payload: CityWeather[]
}

type AddWeatherListType = {
    type: WeatherActionTypes.ADD_CITY_WEATHER
    payload: CityWeather
}

type RemoveWeatherListType = {
    type: WeatherActionTypes.REMOVE_CITY_WEATHER
    payload: number
}

type ChangeScaleWeatherType = {
    type: WeatherActionTypes.CHANGE_SCALE_WEATHER
    payload: { id: number, scale: 'F' | 'C' }
}

type RefetchWeateherType = {
    type: WeatherActionTypes.REFETCH_WEATHER
    payload: { id: number, weather: any[], name: string }
}

type FetchWetherGeoType = {
    type: WeatherActionTypes.FETCH_WEATHER_GEO
    payload: CityWeather 
}

export type WeatherActionCreatorsType = 
    SetWeatherListType |
    AddWeatherListType |
    RemoveWeatherListType |
    ChangeScaleWeatherType |
    RefetchWeateherType |
    FetchWetherGeoType