// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';


const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#0099cc', '#4d4dff', '#002db3', '#00cc99', '#9933ff'];

    useEffect(() => {
        setData(getData());
    }, [JSON.stringify(events)]);

    function getData() {
        const eventData = genres.map(genre => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            }
        });
        return eventData;
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill="#000000"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart margin={{
                    top: 0,
                    right: 20,
                    bottom: 0,
                    left: 20,
                }}>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#000000"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={36}/>
            </PieChart>
        </ResponsiveContainer>
    );

};

export default EventGenresChart;