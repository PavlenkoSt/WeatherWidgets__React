import { CityWeather } from "../../../models/weather"
import { WeatherActionTypes } from "./types"


const weatherActionCreators = {
    setCitiesWeather: (citiesWeather: CityWeather[]) => ({ type: WeatherActionTypes.SET_CITIES_WEATHER, payload: citiesWeather }),
    addCityWeather: (cityWeather: CityWeather) => ({ type: WeatherActionTypes.ADD_CITY_WEATHER, payload: cityWeather }),
    removeCityWeather: (id: number) => ({ type: WeatherActionTypes.REMOVE_CITY_WEATHER, payload: id }),
    changeScaleWeather: (id: number, scale: 'C' | 'F') => ({ type: WeatherActionTypes.CHANGE_SCALE_WEATHER, payload: { id, scale } })
}

export default weatherActionCreators