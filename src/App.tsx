import React, { useEffect } from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import localStorageService from './localStorage'
import useAction from './hooks/useAction'
import Language from './components/Language'

const App = () => {

    const { setCitiesWeather, refetchCitiesWeatherThunk } = useAction()

    useEffect(() => {
        const cities = localStorageService.getCities()

        if(cities && cities.length){
            setCitiesWeather(cities)
            refetchCitiesWeatherThunk(cities)
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
