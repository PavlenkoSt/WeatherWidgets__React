import { AppDispatch } from './../../index'
import { CityWeather } from "../../../models/weather"
import { WeatherActionTypes } from "./types"
import weatherAPI from '../../../API/weatherAPI'
import localStorageService from '../../../localStorage'


const weatherActionCreators = {
    setCitiesWeather: (citiesWeather: CityWeather[]) => ({ type: WeatherActionTypes.SET_CITIES_WEATHER, payload: citiesWeather }),
    addCityWeather: (cityWeather: CityWeather) => ({ type: WeatherActionTypes.ADD_CITY_WEATHER, payload: cityWeather }),
    removeCityWeather: (id: number) => ({ type: WeatherActionTypes.REMOVE_CITY_WEATHER, payload: id }),
    changeScaleWeather: (id: number, scale: 'C' | 'F') => ({ type: WeatherActionTypes.CHANGE_SCALE_WEATHER, payload: { id, scale } }),
    refetchCityWeather: (id: number, weather: any[]) => ({ type: WeatherActionTypes.REFETCH_WEATHER, payload: { id, weather } }),
    addCityWeatherThunk: (city: string) => async (dispatch: AppDispatch) => {
        try{
            const data = await weatherAPI.getWeatherByCity(city)

            if(data.cod === '200'){
                const city = {
                    city: data.city.name,
                    country: data.city.country,
                    weather: data.list,
                    id: Date.now(),
                    tempScale: 'C'
                } as CityWeather

                //@ts-ignore
                await dispatch(weatherActionCreators.addCityWeather(city))
                localStorageService.addCity(city)

                return city
            }
            return null
            
        }catch(e){
            console.log(e)
            return null
        }
    },
    refetchCitiesWeatherThunk: (cities: CityWeather[]) => async (dispatch: AppDispatch) => {
        try{
            cities.forEach( async (city) => {
                const data = await weatherAPI.getWeatherByCity(city.city)

                if(data.cod === '200'){
                    //@ts-ignore
                    await dispatch(weatherActionCreators.refetchCityWeather(city.id, data.list))
                    localStorageService.updateWeatherData(city.id, data.list)
                }
            })
        }catch(e){
            console.log(e)
        }
    }
}

export default weatherActionCreators