export type CityWeather = {
    city: string
    country: string
    weather: any[]
    id: number
    tempScale: 'F' | 'C'
}

export type CoordsType = {
    latitude: number,
    longitude: number
}