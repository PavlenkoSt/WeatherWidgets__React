import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Widget from './Widget'
import s from './Widget.module.scss'

const WidgetsList = () => {

    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)
    const { rtl } = useTypedSelector(state => state.optionsReducer)

    const renderWidgets = citiesWeather.map(cityW => <Widget
        key={ cityW.id }
        widgetInfo={ cityW }
    />)

    if(!renderWidgets.length){
        return <h2 className={s.noWidgets} >There are no widgets yet. Enter the city and add the first one.</h2>
    }
    
    return (
        <div className={rtl ? `${s.list} ${s.rtl}` : s.list} >
            { renderWidgets }
        </div>
    )
}

export default WidgetsList
