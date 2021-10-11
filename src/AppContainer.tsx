import React, { useEffect, useState } from 'react'
import App from './App'
import { useTypedSelector } from './hooks/useTypedSelector'
import { LangType } from './store/reducers/options/types'
import { usePosition } from './hooks/usePosition'
import localStorageService from './localStorage'
import useAction from './hooks/useAction'

const AppContainer = () => {

    const [ isGotGeoCity, setIsGotGeoCity ] = useState(false)

    const { lang } = useTypedSelector(state => state.optionsReducer)
    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)

    const { setCitiesWeather, refetchCitiesWeatherThunk, changeLang, fetchWeatherGeoThunk } = useAction()
    const { error, latitude, longitude } = usePosition()

    useEffect(() => {
        // get business data with local storage and request for the current weather

        const langFromLS = localStorageService.getLang() as LangType
        const cities = localStorageService.getCities()

        if(langFromLS){
            changeLang(langFromLS)
        }

        if(cities && cities.length){
            setCitiesWeather(cities)
            refetchCitiesWeatherThunk(cities, langFromLS ? langFromLS : lang)
        }
    }, [])


    useEffect(() => {
        // Getting the user's location and automatically displaying a widget with a given city

        if(!isGotGeoCity && !error && latitude && longitude){
            const city = fetchWeatherGeoThunk({ latitude, longitude }, lang)
            //@ts-ignore
            if(city){
                setIsGotGeoCity(true)
            }
        }
    }, [latitude, longitude])

    useEffect(() => {
        // synchronization of business data with local storage

        localStorageService.setCities(citiesWeather)
    }, [citiesWeather])

    return <App/>
}

export default AppContainer
