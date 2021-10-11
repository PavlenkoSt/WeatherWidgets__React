import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import terms from '../../utilts/terms'
import { WeatherCharacterType } from './BottomWidget'
import s from './Widget.module.scss'

type OptionPropsType = {
    isColdTheme: boolean
    character: WeatherCharacterType
}

const WidgetOption: FC<OptionPropsType> = ({ isColdTheme, character }) => {

    const { lang } = useTypedSelector(state => state.optionsReducer)

    //@ts-ignore
    const name = terms[character.name][lang]

    return (
        <div className={ s.option }>
            <span>{ name }</span>
            :
            <span className={ isColdTheme ? `${s.val} ${s.cold}` : s.val} >{ character.val } { character.scale }</span>
        </div>
    )
}

export default WidgetOption
