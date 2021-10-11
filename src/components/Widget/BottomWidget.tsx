import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import terms from '../../utilts/terms'
import useTemp from '../../hooks/useTemp'
import s from './Widget.module.scss'
import WidgetOption from './WidgetOption'
import WidgetScale from './WidgetScale'


export type WeatherCharacterType = {
    val: number
    scale: string
    name: string
}

type BottomWidgetPropsType = {
    tempScale: 'F' | 'C'
    temp: number
    isColdTheme: boolean
    feelsLike: number
    id: number
    weatherCharacters: WeatherCharacterType[]
}


const BottomWidget: FC<BottomWidgetPropsType> = ({ temp, tempScale, isColdTheme, feelsLike, id, weatherCharacters }) => {
    
    const { lang } = useTypedSelector(state => state.optionsReducer)
    const { isCelsiusScale, tempCalcValue, feelsLikeCalc } = useTemp(tempScale, temp, feelsLike)

    const renderOptions = weatherCharacters.map(character => <WidgetOption
        isColdTheme={ isColdTheme }
        character={ character }
        key={ character.name }
    />) 

    return (
        <div className={ s.bottom }>
            <div>
                <div className={ s.temp }>
                    <div className={ s.tempVal }>
                        { tempCalcValue }
                    </div>
                    <div className={ s.tempTumbler }>

                        <WidgetScale
                            active={ isCelsiusScale }
                            id={ id }
                            scale='C'
                        >
                            &deg;C
                        </WidgetScale>

                        | 

                        <WidgetScale
                            active={ !isCelsiusScale }
                            id={ id }
                            scale='F'
                        >
                            &deg;F
                        </WidgetScale>

                    </div>
                </div>
                <div className={ s.feelsLike }>
                    <span>{ terms.feelsLike[lang] }</span>
                    : 
                    <span className={ s.feelsLikeVal } >{ feelsLikeCalc } &deg;{ tempScale }</span>
                </div>
            </div>
            <div>
                { renderOptions }
            </div>
        </div>
    )
}

export default BottomWidget
