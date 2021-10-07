import React from 'react'
import './App.scss'
import AddCity from './components/AddCity'
import WidgetsList from './components/WidgetsList'

const App = () => {
    return (
        <div className='app'>
            <AddCity/>
            <WidgetsList/>
        </div>
    )
}

export default App
