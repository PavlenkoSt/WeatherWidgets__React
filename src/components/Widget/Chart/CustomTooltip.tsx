import React, { FC } from 'react'
import s from './Chart.module.scss'

type TooltipPropsType = {
    payload?: any
    active?: boolean
    label?: string
    isColdTheme: boolean
    tempScale: 'F' | 'C'
}

const CustomTooltip: FC<TooltipPropsType> = ({ payload, active, label, isColdTheme, tempScale }) => {

    if(!active){
        return null
    }

    const temp = payload[0].value
    
    return (
        <div className={ s.tooltip }>
            <div className={ s.label } >{ label }</div>
            <div>t: 
                <span 
                    className={ isColdTheme ? `${s.t} ${s.cold}` : s.t } 
                > { temp } &deg;{ tempScale } </span>
            </div>
        </div>
    )
}

export default CustomTooltip
