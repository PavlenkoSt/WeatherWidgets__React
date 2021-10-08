import React, { useEffect } from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import localStorageService from './localStorage'
import useAction from './hooks/useAction'

const App = () => {

    const { setCitiesWeather } = useAction()

    useEffect(() => {
        const cities = localStorageService.getCities()

        if(cities && cities.length){
            setCitiesWeather(cities)
        }
    }, [])

    return (
        <div className='app'>
            <AddCity/>
            <WidgetsList/>
            <ToastContainer/>
        </div>
    )
}

export default App
