import React, { FC } from 'react'
import useAction from '../../hooks/useAction'
import celsiusToFarengeit from '../../utilts/celsiusToFarengeit'
import s from './Widget.module.scss'


type BottomWidgetPropsType = {
    tempScale: 'F' | 'C'
    temp: number
    isColdTheme: boolean
    feelsLike: number
    id: number
    wind: number
    humidity: number
    pressure: number
}

const BottomWidget: FC<BottomWidgetPropsType> = ({ temp, tempScale, isColdTheme, feelsLike, id, wind, humidity, pressure }) => {

    const { changeScaleWeather } = useAction()

    const isCelsiusScale = tempScale === 'C'
    const tempCalc = isCelsiusScale ? Math.round(temp) : Math.round(celsiusToFarengeit(temp))
    const feelsLikeCalc = isCelsiusScale ? Math.round(feelsLike) : Math.round(celsiusToFarengeit(feelsLike))

    return (
        <div className={ s.bottom }>
            <div>
                <div className={ s.temp }>
                    <div className={ s.tempVal }>{ tempCalc }</div>
                    <div className={ s.tempTumbler }>
                        <div 
                            className={ isCelsiusScale ? `${s.tempItem} ${s.active}` : s.tempItem }
                            onClick={ () => !isCelsiusScale && changeScaleWeather(id, 'C') }
                        >&deg;C</div> 
                        | 
                        <div
                            className={ !isCelsiusScale ? `${s.tempItem} ${s.active}` : s.tempItem }
                            onClick={ () => isCelsiusScale && changeScaleWeather(id, 'F') }
                        >&deg;F</div>
                    </div>
                </div>
                <div className={ s.feelsLike }>Feels like: { feelsLikeCalc } &deg;{ tempScale }</div>
            </div>
            <div>
                <div className={ s.option }>Wind: 
                    <span className={ isColdTheme ? s.cold : ''} >{ wind } m/s</span>
                </div>
                <div className={ s.option }>Humidity: 
                    <span className={ isColdTheme ? s.cold : ''}>{ humidity } %</span>
                </div>
                <div className={ s.option }>Pressure: 
                    <span className={ isColdTheme ? s.cold : ''}>{ pressure } Pa</span>
                </div>
            </div>
        </div>
    )
}

export default BottomWidget
