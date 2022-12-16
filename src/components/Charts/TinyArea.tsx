import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 80,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 250,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 170,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 270,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 180,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 290,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 65,
    pv: 4300,
    amt: 2100,
  },
];


const TinyArea = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={200}
        height={60}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#339AF0" fill="#E7F5FF" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TinyArea