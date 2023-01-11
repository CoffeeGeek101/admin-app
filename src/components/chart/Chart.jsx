import React from 'react'
import style from "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function Chart({title, data, dataKey, grid}) {
    return (
    <div className='chart'>
        <div className='title'>{title}<span className='dot'>.</span></div>
        <ResponsiveContainer width="99%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#005279' className='xaxis'/>
                <Line type="monotone" dataKey={dataKey} stroke="#005279" strokeWidth={3} />
                <Tooltip stroke="#005279"/>
                {grid && <CartesianGrid stroke="005279" strokeDasharray={5}/>}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
