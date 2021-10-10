import React, { useEffect } from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import localStorageService from './localStorage'
import useAction from './hooks/useAction'
import Language from './components/Language/Language'
import { useTypedSelector } from './hooks/useTypedSelector'
import { LangType } from './store/reducers/options/types'

const App = () => {

    const { setCitiesWeather, refetchCitiesWeatherThunk, changeLang } = useAction()
    const { lang } = useTypedSelector(state => state.optionsReducer)

    useEffect(() => {
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

    return (
        <div className='app'>
            <Language/>
            <AddCity/>
            <WidgetsList/>
            <ToastContainer/>
        </div>
    )
}

export default App
