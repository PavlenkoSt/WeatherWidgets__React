import dateFormat from 'dateformat'
import React, { FC } from 'react'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'
import s from './Chart.module.scss'
import celsiusToFarengeit from '../../../utilts/celsiusToFarengeit'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

type ChartPropsType = {
  isColdTheme: boolean,
  allDaysWeatherData: any[],
  tempScale: 'F' | 'C'
}

const Chart: FC<ChartPropsType> = React.memo(({ isColdTheme, allDaysWeatherData, tempScale }) => {

    const { rtl } = useTypedSelector(state => state.optionsReducer)

    const weatherData = allDaysWeatherData.map(oneDayWeather => ({
        date: dateFormat(oneDayWeather.dt_txt, 'dd.mm HH:MM'),
        Temperature: tempScale === 'C' ? Math.floor(oneDayWeather.main.temp) : Math.floor(celsiusToFarengeit(oneDayWeather.main.temp))
    }))

    const fill = isColdTheme ? '#5B8CFF' : '#FFA25B'

    return (
        <div className={ s.chartContainer }>
            <ResponsiveContainer>
            <AreaChart
                data={ weatherData }
                margin={{
                    top: 10,
                    right: 15,
                    left: 15,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="date" reversed={ rtl } />
                <Tooltip content={ 
                    <CustomTooltip 
                        isColdTheme={ isColdTheme } 
                        tempScale={ tempScale }
                    /> 
                } />
                <Area type="monotone" dataKey="Temperature" stroke={ fill } fill={ fill } />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
})

export default Chart