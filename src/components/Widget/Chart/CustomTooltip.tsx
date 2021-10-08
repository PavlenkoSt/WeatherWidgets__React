import React, { FC } from 'react'

type TooltipPropsType = {
    payload?: any
    active?: any
}

const CustomTooltip: FC<TooltipPropsType> = ({ payload, active }) => {


    if(!active){
        return null
    }
    
    return (
        <div>
            { payload[0].value }
        </div>
    )
}

export default CustomTooltip
