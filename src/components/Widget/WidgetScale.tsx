import React, { FC } from 'react'
import useAction from '../../hooks/useAction'
import s from './Widget.module.scss'


type WidgetScalePropsType = {
    active: boolean
    id: number
    scale: 'F' | 'C'
}   

const WidgetScale: FC<WidgetScalePropsType> = ({ children, active, id, scale }) => {

    const { changeScaleWeather } = useAction()

    return (
        <div 
            className={ active ? `${s.tempItem} ${s.active}` : s.tempItem }
            onClick={ () => !active && changeScaleWeather(id, scale) }
        >
            { children }
        </div>
    )
}

export default WidgetScale
