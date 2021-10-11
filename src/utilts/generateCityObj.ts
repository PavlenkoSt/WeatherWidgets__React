import { CityWeather } from './../models/weather'


const generateCityObj = (defaultData: any) => {
    return {
        city: defaultData.city.name,
        country: defaultData.city.country,
        weather: defaultData.list,
        id: Date.now(),
        tempScale: 'C'
    } as CityWeather
}

export default generateCityObj