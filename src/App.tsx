import React from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'
import Language from './components/Language/Language'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
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
