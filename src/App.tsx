import React from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
    return (
        <div className='app'>
            <AddCity/>
            <WidgetsList/>
            <ToastContainer/>
        </div>
    )
}

export default App
