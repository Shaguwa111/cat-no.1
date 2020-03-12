import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import moment from 'moment'

const mutatePrice = (num) => {
    const base = Math.abs(num / 10)
    const rps = (Math.floor(Math.random() * 3) + 1)

    if (rps > 1) {
        return num + base
    } else {
        return num - (Math.floor(Math.random() * base))
    }
}
const renderName = (num) => {
    const currentDate = moment().subtract(num, 'M')

    return num < 2 ? '1 month ago': currentDate.fromNow()
}

const priceTrackAlgorithm = (price, timespan) => {
    const prices = []
    let priceRef = price

        prices.push({
            name: 'Today',
            price
        })

    for (let i = 1; i < timespan; i ++) {
        const mutatedPrice = mutatePrice(priceRef)
        prices.push({
            name: renderName(i),
            price: mutatedPrice.toFixed(2)
        })
        priceRef = mutatedPrice
    }

    return prices
}

const TrendChart = ({item}) => {
    const data = priceTrackAlgorithm(item.price, 6)

    return(
        <ResponsiveContainer height="100%" width="100%">
            <LineChart
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
                <Line type="monotone" dataKey="price" stroke="#1baeae" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    )
}

export default TrendChart