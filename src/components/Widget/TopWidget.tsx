import React, { FC } from 'react'
import useAction from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import dateLang from '../../utilts/dateLang'
import s from './Widget.module.scss'


type TopWidgetPropsType = {
    city: string
    country: string
    id: number
    date: string
    status: number
    icon: string
}

const TopWidget: FC<TopWidgetPropsType> = React.memo(({ city, country, id, status, icon, date }) => {

    const { lang } = useTypedSelector(state => state.optionsReducer)
    
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
                        <span>{ status }</span>
                    </div>
                </div>
            <div className={ s.date }>{ dateLang(date, lang)  }</div>   
        </>
    )
})

export default TopWidget
