import { CityWeather } from "../../../models/weather"
import { WeatherActionTypes } from "./types"


const weatherActionCreators = {
    setCitiesWeather: (citiesWeather: CityWeather) => ({ type: WeatherActionTypes.SET_SITIES_WEATHER, payload: citiesWeather })
}

export default weatherActionCreators