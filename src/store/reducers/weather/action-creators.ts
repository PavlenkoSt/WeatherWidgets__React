import { CityWeather } from './../../../models/weather'
import { AppDispatch } from './../../index'
import { WeatherActionTypes } from "./types"
import weatherAPI from '../../../API/weatherAPI'
import { LangType } from '../options/types'
import generateCityObj from '../../../utilts/generateCityObj'


const weatherActionCreators = {
    // ac

    setCitiesWeather: (citiesWeather: CityWeather[]) => ({ type: WeatherActionTypes.SET_CITIES_WEATHER, payload: citiesWeather }),
    
    addCityWeather: (cityWeather: CityWeather) => ({ type: WeatherActionTypes.ADD_CITY_WEATHER, payload: cityWeather }),
    
    removeCityWeather: (id: number) => ({ type: WeatherActionTypes.REMOVE_CITY_WEATHER, payload: id }),
    
    changeScaleWeather: (id: number, scale: 'C' | 'F') => ({ type: WeatherActionTypes.CHANGE_SCALE_WEATHER, payload: { id, scale } }),
    
    refetchCityWeather: (id: number, weather: any[], name: string) => ({ type: WeatherActionTypes.REFETCH_WEATHER, payload: { id, weather, name } }),
    
    fetchWeatherGeo: (cityWeaher: CityWeather) => ({ type: WeatherActionTypes.FETCH_WEATHER_GEO, payload: cityWeaher }),

    // thunks
    
    fetchWeatherGeoThunk: (coords: any, lang: LangType) => async (dispatch: AppDispatch) => {
        try{
            const data = await weatherAPI.getWeatherByGeo(coords, lang)

            if(data.cod === '200'){
                const city = generateCityObj(data)

                //@ts-ignore
                await dispatch(weatherActionCreators.fetchWeatherGeo(city))

                return city
            }

            return null
        }catch(e){
            console.log(e)
        }
    },

    addCityWeatherThunk: (city: string, lang: LangType = 'en') => async (dispatch: AppDispatch) => {
        try{
            const data = await weatherAPI.getWeatherByCity(city, lang)

            if(data.cod === '200'){
                const city = generateCityObj(data)

                //@ts-ignore
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
                    //@ts-ignore
                    await dispatch(weatherActionCreators.refetchCityWeather(city.id, data.list, data.city.name))
                }
            })
        }catch(e){
            console.log(e)
        }
    }
}

export default weatherActionCreators