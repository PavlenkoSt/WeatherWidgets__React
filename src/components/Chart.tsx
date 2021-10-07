import React from 'react'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    date: '20.04',
    temp: 20,
  },
  {
    date: '20.04',
    temp: 16,
  },
  {
    date: '20.04',
    temp: 26,
  },
  {
    date: '20.04',
    temp: 22,
  },
  {
    date: '20.04',
    temp: 18,
  },
  {
    date: '20.04',
    temp: 12,
  },
  {
    date: '20.04',
    temp: 17,
  }
]

const Chart = React.memo(() => {
    return (
      <div style={{ width: '100%', height: 150, paddingLeft: 15 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" />
            <Tooltip active={true} />
            <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
})

export default Chart