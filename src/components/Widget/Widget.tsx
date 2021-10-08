import React, { FC } from 'react'
import { CityWeather } from '../../models/weather'
import Chart from '../Chart'
import BottomWidget from './BottomWidget'
import TopWidget from './TopWidget'
import s from './Widget.module.scss'
import dateFormat from 'dateformat'

type WidgetPropsType = {
    widgetInfo: CityWeather
}

const Widget: FC<WidgetPropsType> = ({ widgetInfo }) => {

    const currentWeather = widgetInfo.weather[0]
    const isColdTheme = Math.round(currentWeather.main.temp) < 0

    const formatedDate = dateFormat(currentWeather.dt_txt, "ddd, dd mmmm, HH:MM")

    return (
        <div className={ s.container }>
           <div className={ isColdTheme ? `${s.widget} ${s.cold}` : s.widget }>
                <TopWidget
                    id={ widgetInfo.id }
                    city={ widgetInfo.city }
                    country={ widgetInfo.country }
                    date={ formatedDate }
                    temp={ currentWeather.main.temp }
                    icon={ currentWeather.weather[0].icon }
                />
                <Chart 
                />
                <BottomWidget
                    id={ widgetInfo.id }
                    tempScale={ widgetInfo.tempScale }
                    temp={ currentWeather.main.temp }
                    feelsLike={ currentWeather.main.feels_like }
                    wind={ currentWeather.wind.speed }
                    humidity={ currentWeather.main.pressure }
                    pressure={ currentWeather.main.humidity }
                    isColdTheme={ isColdTheme }
                />
           </div>
        </div>
    )
}

export default Widget
