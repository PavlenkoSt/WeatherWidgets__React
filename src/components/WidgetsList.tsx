import React, { useEffect } from 'react'
import useAction from '../hooks/useAction'
import { usePosition } from '../hooks/usePosition'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Widget from './Widget/Widget'
import s from './WidgetsList.module.scss'

const WidgetsList = () => {

    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)
    const { rtl, lang } = useTypedSelector(state => state.optionsReducer)

    const { fetchWeatherGeoThunk } = useAction()

    const { error, latitude, longitude } = usePosition()

    useEffect(() => {
        if(!error && latitude && longitude){
            fetchWeatherGeoThunk({ latitude, longitude }, lang)
        }
    }, [latitude, longitude])

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
