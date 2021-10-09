import config from '../config.json'

const weatherAPI = {
    getWeatherByCity: async (city: string, lang: string = 'en') => {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}&units=metric&lang=${lang}`)
        const weather = await responce.json()
        return weather
    }
}

export default weatherAPI