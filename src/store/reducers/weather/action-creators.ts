import { CityWeather, CoordsType } from './../../../models/weather'
import { AppDispatch } from './../../index'
import { WeatherActionTypes } from "./types"
import weatherAPI from '../../../API/weatherAPI'
import { LangType } from '../options/types'
import generateCityObj from '../../../utilts/generateCityObj'


const weatherActionCreators = {
    // ac

    setCitiesWeather: (citiesWeather: CityWeather[]) => ({ type: WeatherActionTypes.SET_CITIES_WEATHER, payload: citiesWeather }) as const,
    
    addCityWeather: (cityWeather: CityWeather) => ({ type: WeatherActionTypes.ADD_CITY_WEATHER, payload: cityWeather }) as const,
    
    removeCityWeather: (id: number) => ({ type: WeatherActionTypes.REMOVE_CITY_WEATHER, payload: id }) as const,
    
    changeScaleWeather: (id: number, scale: 'C' | 'F') => ({ type: WeatherActionTypes.CHANGE_SCALE_WEATHER, payload: { id, scale } }) as const,
    
    refetchCityWeather: (id: number, weather: any[], name: string) => ({ type: WeatherActionTypes.REFETCH_WEATHER, payload: { id, weather, name } }) as const,
    
    fetchWeatherGeo: (cityWeaher: CityWeather) => ({ type: WeatherActionTypes.FETCH_WEATHER_GEO, payload: cityWeaher }) as const,

    // thunks
    
    fetchWeatherGeoThunk: (coords: CoordsType, lang: LangType) => async (dispatch: AppDispatch) => {
        try{
            const data = await weatherAPI.getWeatherByGeo(coords, lang)

            if(data.cod === '200'){
                const city = generateCityObj(data)

                await dispatch(weatherActionCreators.fetchWeatherGeo(city))

                return city
            }

            return null
        }catch(e){
            console.log(e)
            return null
        }
    },

    addCityWeatherThunk: (city: string, lang: LangType = 'en') => async (dispatch: AppDispatch) => {
        try{
            const data = await weatherAPI.getWeatherByCity(city, lang)

            if(data.cod === '200'){
                const city = generateCityObj(data)

                await dispatch(weatherActionCreators.addCityWeather(city))

                return city
            }
            return null
            
        }catch(e){
            console.log(e)
            return null
        }
    },
    
    refetchCitiesWeatherThunk: (cities: CityWeather[], lang: string) => async (dispatch: AppDispatch) => {
        try{
            cities.forEach( async (city) => {
                const data = await weatherAPI.getWeatherByCity(city.city, lang)

                if(data.cod === '200'){
                    await dispatch(weatherActionCreators.refetchCityWeather(city.id, data.list, data.city.name))
                }
            })
        }catch(e){
            console.log(e)
        }
    }
}

export default weatherActionCreators