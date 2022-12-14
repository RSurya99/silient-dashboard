import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

function AreaChartComponent() {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  })
  const handleMouseEnter = (o: any) => {
    const { dataKey } = o

    setOpacity({
      ...opacity, [dataKey]: 0.5,
    })
  }

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o

    setOpacity({
      ...opacity, [dataKey]: 1,
    })
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#339AF0" fill="#74C0FC" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#51CF66" fill="#8CE99A" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
