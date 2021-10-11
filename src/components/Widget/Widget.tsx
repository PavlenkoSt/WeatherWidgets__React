import React, { FC } from 'react'
import { CityWeather } from '../../models/weather'
import Chart from './Chart/Chart'
import BottomWidget from './BottomWidget'
import TopWidget from './TopWidget'
import s from './Widget.module.scss'
import dateFormat from 'dateformat'
import { useTypedSelector } from '../../hooks/useTypedSelector'

type WidgetPropsType = {
    widgetInfo: CityWeather
}

const Widget: FC<WidgetPropsType> = ({ widgetInfo }) => {

    const currentWeather = widgetInfo.weather[0]
    const isColdTheme = Math.round(currentWeather.main.temp) < 0

    const formatedDate = dateFormat(currentWeather.dt_txt, 'ddd, d mmmm, HH:MM')
    
    const { rtl } = useTypedSelector(state => state.optionsReducer)

    return (
        <div className={ rtl ? `${s.item} ${s.rtl}` : s.item } >
           <div className={ isColdTheme ? `${s.widget} ${s.cold}` : s.widget }>
                <TopWidget
                    id={ widgetInfo.id }
                    city={ widgetInfo.city }
                    country={ widgetInfo.country }
                    date={ formatedDate }
                    status={ currentWeather.weather[0].description }
                    icon={ currentWeather.weather[0].icon }
                />
                <Chart 
                    isColdTheme={ isColdTheme }
                    allDaysWeatherData={ widgetInfo.weather }
                    tempScale={ widgetInfo.tempScale }
                />
                <BottomWidget
                    id={ widgetInfo.id }
                    tempScale={ widgetInfo.tempScale }
                    temp={ currentWeather.main.temp }
                    feelsLike={ currentWeather.main.feels_like }
                    wind={ currentWeather.wind.speed }
                    humidity={ currentWeather.main.humidity }
                    pressure={ currentWeather.main.pressure }
                    isColdTheme={ isColdTheme }
                />
           </div>
        </div>
    )
}

export default Widget
