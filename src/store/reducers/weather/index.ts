import { WeatherActionCreatorsType, WeatherActionTypes, WeatherStateType } from "./types"

const initialState: WeatherStateType = {
    citiesWeather: [
        {
            city: 'ds',
            country: 'sd',
            weather: []
        },
        {
            city: 'ds2',
            country: 'sd2',
            weather: []
        }
    ]
}

const weatherReducer = (state = initialState, action: WeatherActionCreatorsType) => {
    switch(action.type){
        case WeatherActionTypes.SET_SITIES_WEATHER: 
            return { ...state, citiesWeather: action.payload }

        default:    
            return state
    }
}

export default weatherReducer