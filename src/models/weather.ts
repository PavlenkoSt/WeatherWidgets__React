export type CityWeather = {
    city: string
    country: string
    weather: WeatherItem[]
}

type WeatherItem = {
    date: string
    status: string
    statusPic: string
    temp: number
    feelsLike: number
    wind: number
    humidity: number
    pressure: number
}