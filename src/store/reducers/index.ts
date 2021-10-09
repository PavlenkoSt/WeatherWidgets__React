import { combineReducers } from 'redux'
import weatherReducer from './weather'
import optionsReducer from './options'

const rootReducer = combineReducers({
    weatherReducer,
    optionsReducer
})


export default rootReducer