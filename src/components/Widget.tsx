import React, { FC } from 'react'
import { CityWeather } from '../models/weather'
import Chart from './Chart'
import s from './Widget.module.scss'

type WidgetPropsType = {
    widgetInfo: CityWeather
}

const Widget: FC<WidgetPropsType> = ({ widgetInfo }) => {

    const currentWeather = widgetInfo.weather[0]
    const weatherStatus = widgetInfo.weather[0].weather[0]
    console.log(widgetInfo);
    

    return (
        <div className={ s.container }>
           <div className={ s.widget }>
                <div className={ s.top }>
                    <div className={ s.sity }>{ `${widgetInfo.city}, ${widgetInfo.country}` }</div>
                    <div className={ s.status }>
                        <img 
                            alt='weather-icon'
                            src={ `http://openweathermap.org/img/wn/${weatherStatus.icon}@2x.png` }
                            className={ s.statusIcon }
                        />
                        <span>{ weatherStatus.main }</span>
                    </div>
                </div>
                <div className={ s.date }>{ currentWeather.dt_txt }</div>
                <Chart
                    
                />
           </div>
        </div>
    )
}

export default Widget
