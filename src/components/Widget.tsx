import React, { FC } from 'react'
import useAction from '../hooks/useAction'
import { CityWeather } from '../models/weather'
import celsiusToFarengeit from '../utilts/celsiusToFarengeit'
import Chart from './Chart'
import s from './Widget.module.scss'

type WidgetPropsType = {
    widgetInfo: CityWeather
}

const Widget: FC<WidgetPropsType> = ({ widgetInfo }) => {

    const currentWeather = widgetInfo.weather[0]
    const weatherStatus = widgetInfo.weather[0].weather[0]

    const { removeCityWeather, changeScaleWeather } = useAction()

    const isCelsiusScale = widgetInfo.tempScale === 'C'
    const temp = isCelsiusScale ? Math.round(currentWeather.main.temp) : Math.round(celsiusToFarengeit(currentWeather.main.temp))

    const isColdTheme = Math.round(currentWeather.main.temp) < 0

    return (
        <div className={ s.container }>
           <div className={ isColdTheme ? `${ s.widget } ${ s.cold }` : s.widget }>
                <div className={ s.close } onClick={ () => removeCityWeather(widgetInfo.id) } >&#10006;</div>
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
                <Chart />
                <div className={ s.bottom }>
                    <div>
                        <div className={ s.temp }>
                            <div className={ s.tempVal }>{ temp }</div>
                            <div className={ s.tempTumbler }>
                                <div 
                                    className={ `${s.tempItem} ${ isCelsiusScale ? s.active : '' }` }
                                    onClick={ () => !isCelsiusScale && changeScaleWeather(widgetInfo.id, 'C') }
                                >&deg;C</div> 
                                | 
                                <div
                                    className={ `${s.tempItem} ${ !isCelsiusScale ? s.active : '' }` }
                                    onClick={ () => isCelsiusScale && changeScaleWeather(widgetInfo.id, 'F') }
                                >&deg;F</div>
                            </div>
                        </div>
                        <div className={ s.feelsLike }>Feels like: { Math.round(currentWeather.main.feels_like) } &deg;C</div>
                    </div>
                    <div>
                        <div className={ s.option }>Wind: 
                            <span className={ isColdTheme ? s.cold : ''} >{ currentWeather.wind.speed } m/s</span>
                        </div>
                        <div className={ s.option }>Humidity: 
                            <span className={ isColdTheme ? s.cold : ''}>{ currentWeather.main.humidity }%</span>
                        </div>
                        <div className={ s.option }>Pressure: 
                            <span className={ isColdTheme ? s.cold : ''}>{ currentWeather.main.pressure }Pa</span>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Widget
