import React, { useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LangType } from '../../store/reducers/options/types'
import s from './Language.module.scss'
import LanguageItem from './LanguageItem'

const Language = () => {
    const [ activeSelect, setActiveSelect ] = useState(false)

    const { lang, rtl } = useTypedSelector(state => state.optionsReducer)

    const languages = [ 'en', 'ua', 'he' ] as LangType[]

    const generateOptions = languages.map(lang => <LanguageItem 
        key={ lang }
        value={ lang } 
        setActiveSelect={ setActiveSelect }
    />)

    const activateSelect = () => {
        setActiveSelect(prevStatus => !prevStatus)
    }

    const closeDropdown = (e: any) => {
        setActiveSelect(false)
    }

    return (
        <div 
            className={ rtl ? `${s.container} ${s.rtl}` : s.container }
            onMouseLeave={ closeDropdown }
        >
            <div 
                className={ activeSelect ? `${s.select} ${s.active}` : s.select } 
                onClick={ activateSelect }
            >
                <img
                    alt='lang'
                    src='./icons/world.svg'
                    className={ s.world }
                />
                <span>{ lang.toUpperCase() }</span>
                <img
                    alt='lang'
                    src='./icons/down-arrow.svg'
                    className={ s.arr }
                />
            </div>
            { activeSelect && (
                <div className={ s.dropdown } >
                    { generateOptions }
                </div>
            ) }
        </div>
    )
}

export default Language
