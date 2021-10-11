import { WeatherActionCreatorsType, WeatherActionTypes, WeatherStateType } from "./types"

const initialState: WeatherStateType = {
    citiesWeather: []
}

const weatherReducer = (state = initialState, action: WeatherActionCreatorsType) => {
    switch(action.type){
        case WeatherActionTypes.SET_CITIES_WEATHER: 
            return { ...state, citiesWeather: action.payload }

        case WeatherActionTypes.ADD_CITY_WEATHER: 
            return { ...state, citiesWeather: [ action.payload, ...state.citiesWeather ] }

        case WeatherActionTypes.REMOVE_CITY_WEATHER: 
            return { ...state, citiesWeather: state.citiesWeather.filter(cityW => cityW.id !== action.payload) }

        case WeatherActionTypes.CHANGE_SCALE_WEATHER: 
            return { ...state, citiesWeather: state.citiesWeather.map(cityW => {
                if(cityW.id === action.payload.id){
                    cityW.tempScale = action.payload.scale
                }
                return cityW
            }) }
            
        case WeatherActionTypes.REFETCH_WEATHER: 
            return { ...state, citiesWeather: state.citiesWeather.map(cityW => {
                if(cityW.id === action.payload.id){
                    cityW.weather = action.payload.weather
                    cityW.city = action.payload.name
                }
                return cityW
            }) }

        case WeatherActionTypes.FETCH_WEATHER_GEO:
            const exist = state.citiesWeather.find(city => city.city === action.payload.city)
            
            if(exist){
                exist.weather = action.payload.weather
                return { ...state, citiesWeather: [ exist, ...state.citiesWeather.filter(city => city.city !== action.payload.city) ] }
            }

            return { ...state, citiesWeather: [ action.payload, ...state.citiesWeather ] }
        
        default:    
            return state
    }
}

export default weatherReducer