import dateFormat from 'dateformat'
import React, { FC } from 'react'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'
import s from './Chart.module.scss'

type ChartPropsType = {
  isColdTheme: boolean,
  allDaysWeatherData: any[]
}

const Chart: FC<ChartPropsType> = React.memo(({ isColdTheme, allDaysWeatherData }) => {

    const weatherData = allDaysWeatherData.map(oneDayWeather => ({
        date: dateFormat(oneDayWeather.dt_txt, 'dd.mm hh:MM'),
        Temperature: Math.floor(oneDayWeather.main.temp)
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
                <XAxis dataKey="date" />
                <Tooltip content={ <CustomTooltip isColdTheme={ isColdTheme } /> } />
                <Area type="monotone" dataKey="Temperature" stroke={ fill } fill={ fill } />
            </AreaChart>
            </ResponsiveContainer>
        </div>
    )
})

export default Chart