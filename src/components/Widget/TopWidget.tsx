import React, { FC } from 'react'
import useAction from '../../hooks/useAction'
import s from './Widget.module.scss'


type TopWidgetPropsType = {
    city: string
    country: string
    id: number
    date: string
    temp: number
    icon: string
}

const TopWidget: FC<TopWidgetPropsType> = ({ city, country, id, temp, icon, date }) => {

    const { removeCityWeather } = useAction()

    return (
        <>
            <div className={ s.close } onClick={ () => removeCityWeather(id) } >&#10006;</div>
                <div className={ s.top }>
                    <div className={ s.sity }>{ `${city}, ${country}` }</div>
                    <div className={ s.status }>
                        <img 
                            alt='weather-icon'
                            src={ `http://openweathermap.org/img/wn/${icon}@2x.png` }
                            className={ s.statusIcon }
                        />
                        <span>{ temp }</span>
                    </div>
                </div>
            <div className={ s.date }>{ date }</div>   
        </>
    )
}

export default TopWidget
