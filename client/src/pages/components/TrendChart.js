import React, { PureComponent} from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        id: 'Item',
        color: 'hsl(180, 73%, 39%)',
        data: [
            {
                x: 1,
                y: Math.floor(Math.random() * 10)
            },
            {
                x: 2,
                y: Math.floor(Math.random() * 10)
            },
            {
                x: 3,
                y: Math.floor(Math.random() * 10)
            },
            {
                x: 4,
                y: Math.floor(Math.random() * 10)
            },
            {
                x: 5,
                y: Math.floor(Math.random() * 10)
            }
        ]
    }
]

const TrendChart = () => {
    return(
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    )
}

export default TrendChart