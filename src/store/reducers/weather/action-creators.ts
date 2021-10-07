import { CityWeather } from "../../../models/weather"
import { WeatherActionTypes } from "./types"


const weatherActionCreators = {
    setCitiesWeather: (citiesWeather: CityWeather[]) => ({ type: WeatherActionTypes.SET_CITIES_WEATHER, payload: citiesWeather }),
    addCitiesWeather: (citiesWeather: CityWeather) => ({ type: WeatherActionTypes.ADD_CITY_WEATHER, payload: citiesWeather })
}

export default weatherActionCreators