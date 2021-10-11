import { LangType } from '../store/reducers/options/types'
import { CityWeather } from './../models/weather'


const localStorageService = {
    setCities: (cities: CityWeather[]) => {
        if(cities){
            localStorage.setItem('weatherCities', JSON.stringify(cities))  
        } 
    },

    getCities: () => {
        const cities = localStorage.getItem('weatherCities')
        
        if(cities && cities.length){
            return JSON.parse(cities)
        }

        return null
    },

    setLang: (lang: LangType) => {
        localStorage.setItem('lang', lang)
    },

    getLang: () => {
        return localStorage.getItem('lang')
    }
}

export default localStorageService