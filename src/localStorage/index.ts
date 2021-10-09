import { LangType } from '../store/reducers/options/types'
import { CityWeather } from './../models/weather'


const localStorageService = {
    addCity: (cityWeather: CityWeather) => {
        const exist = localStorage.getItem('weatherCities')

        if(exist){
            const old = JSON.parse(exist)
            localStorage.setItem('weatherCities', JSON.stringify([ ...old, cityWeather ]))   
            return
        }

        localStorage.setItem('weatherCities', JSON.stringify([ cityWeather ]))   
    },

    getCities: () => {
        const cities = localStorage.getItem('weatherCities')
        
        if(cities && cities.length){
            return JSON.parse(cities).reverse()
        }

        return null
    },

    removeCity: (id: number) => {
        const cities = localStorage.getItem('weatherCities')

        if(cities && cities.length){
            const parsedCities = JSON.parse(cities)

            localStorage.setItem('weatherCities', JSON.stringify(
                parsedCities.filter((city: CityWeather) => city.id !== id)
            ))   
        }
    },

    changeScaleForCity: (id: number, scale: 'F' | 'C') => {
        const cities = localStorage.getItem('weatherCities')

        if(cities && cities.length){
            const parsedCities = JSON.parse(cities)

            localStorage.setItem('weatherCities', JSON.stringify(
                parsedCities.map((city: CityWeather) => {
                    if(city.id === id){
                        city.tempScale = scale
                    }

                    return city
                })
            ))   
        }
    },

    updateWeatherData: (id: number, weather: any[]) => {
        const cities = localStorage.getItem('weatherCities')
        if(cities && cities.length){
            const parsedCities = JSON.parse(cities)

            localStorage.setItem('weatherCities', JSON.stringify(
                parsedCities.map((city: CityWeather) => {
                    if(city.id === id){
                        city.weather = weather
                    }

                    return city
                })
            ))   
        }
    },

    setLang: (lang: LangType) => {
        localStorage.setItem('lang', lang)
    },

    getLang: () => {
        return localStorage.getItem('lang')
    }
}

export default localStorageService