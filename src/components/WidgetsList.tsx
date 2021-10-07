import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Widget from './Widget'
import s from './WidgetsList.module.scss'

const WidgetsList = () => {

    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)

    const renderWidgets = citiesWeather.map((cityW, i) => <Widget
        key={ cityW.id }
        widgetInfo={ cityW }
    />)

    if(!renderWidgets.length){
        return <h2 className={s.noWidgets} >There are no widgets yet. Enter the city and add the first one.</h2>
    }
    
    return (
        <div className={s.list} >
            { renderWidgets }
        </div>
    )
}

export default WidgetsList
