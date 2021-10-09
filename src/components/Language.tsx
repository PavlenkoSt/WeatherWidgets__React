import React from 'react'
import useAction from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypedSelector'
import localStorageService from '../localStorage'
import s from './Language.module.scss'

const Language = () => {

    const { changeLang, refetchCitiesWeatherThunk } = useAction()
    const { lang } = useTypedSelector(state => state.optionsReducer)
    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)

    const selectHandler = (e: any) => {
        const lang = e.target.value

        changeLang(lang)
        localStorageService.setLang(lang)
        refetchCitiesWeatherThunk(citiesWeather, lang)
    }

    return (
        <div className={ s.container }>
            <select value={ lang } onChange={ selectHandler } >
                <option value="en">En</option>
                <option value="ua">Ua</option>
                <option value="he">He</option>
            </select>
        </div>
    )
}

export default Language
