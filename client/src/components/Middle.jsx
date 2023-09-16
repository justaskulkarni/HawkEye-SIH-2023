import React from 'react'
import { BsMenuButtonWideFill, BsChatLeftText, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { useSpring, animated } from 'react-spring';

function Number({ n }){
    const { number } = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Middle() {

    const data = [
        {
            name: '14 Sept',
            uv: 40,
            pv: 24,
            amt: 24,
        },
        {
            name: '15 Sept',
            uv: 30,
            pv: 14,
            amt: 22,
        },
        {
            name: '16 Sept',
            uv: 20,
            pv: 98,
            amt: 23,
        },
        {
            name: '17 Sept',
            uv: 28,
            pv: 39,
            amt: 20,
        },
        {
            name: '18 Sept',
            uv: 19,
            pv: 48,
            amt: 22,
        },
        {
            name: '19 Sept',
            uv: 24,
            pv: 38,
            amt: 25,
        },
        {
            name: '20 Sept',
            uv: 35,
            pv: 43,
            amt: 21,
        },
    ];


    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>REPORTS</h3>
                        <BsMenuButtonWideFill className='card_icon' />
                    </div>
                    <h1><Number n = {300} /></h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CHATS</h3>
                        <BsChatLeftText className='card_icon' />
                    </div>
                    <h1><Number n = {12} /></h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>PERSONNEL</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1><Number n = {33} /></h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1><Number n = {42} /></h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
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
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Middle