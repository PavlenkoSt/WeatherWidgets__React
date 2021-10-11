import config from '../config.json'
import { CoordsType } from '../models/weather'

const weatherAPI = {
    getWeatherByCity: async (city: string, lang: string = 'en') => {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}&units=metric&lang=${lang}`)
        const weather = await responce.json()
        return weather
    },
    getWeatherByGeo: async (coords: CoordsType, lang: string = 'en') => {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${config.API_KEY}&units=metric&lang=${lang}`)
        const weather = await responce.json()
        return weather
    }
}

export default weatherAPI