import React, { Dispatch, FC, SetStateAction } from 'react'
import useAction from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import localStorageService from '../../localStorage'
import { LangType } from '../../store/reducers/options/types'
import s from './Language.module.scss'

type LanguageItemPropsType = {
    value: LangType, 
    setActiveSelect: Dispatch<SetStateAction<boolean>>
}

const LanguageItem: FC<LanguageItemPropsType> = ({ value, setActiveSelect }) => {

    const { changeLang, refetchCitiesWeatherThunk } = useAction()

    const { citiesWeather } = useTypedSelector(state => state.weatherReducer)


    const selectLangHandler = () => {
        changeLang(value)
        localStorageService.setLang(value)
        setActiveSelect(false)
        refetchCitiesWeatherThunk(citiesWeather, value)
    }

    return (
        <div className={ s.item } onClick={ selectLangHandler } >
            { value }
        </div>
    )
}

export default LanguageItem
