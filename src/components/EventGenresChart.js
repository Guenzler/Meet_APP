// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';


const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#0099cc', '#4d4dff', '#002db3', '#00cc99', '#9933ff'];

    const isSmallScreen = window.innerWidth < 600; // can be adjusted based on desired breakpoint
    const outerRadius = isSmallScreen ? 80 : 130; // Adjust the outer radius for small screens

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
                style={{ fontSize: '13px', whiteSpace: 'pre-wrap' }} // Adjust font size of label
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={isSmallScreen ? 300 : 400}>
            <PieChart margin={{
                    top: 0,
                    right: 40,
                    bottom: 15,
                    left: 70,
                }}>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#000000"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={outerRadius}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                <Legend verticalAlign="bottom" align="center" height={42}/>
            </PieChart>
        </ResponsiveContainer>
    );

};

export default EventGenresChart;