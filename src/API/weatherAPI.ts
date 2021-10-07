import config from '../config.json'

const weatherAPI = {
    getWeatherByCity: async (city: string) => {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}`)
        const weather = await responce.json()
        return weather
    }
}

export default weatherAPI