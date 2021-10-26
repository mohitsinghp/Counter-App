import React, { useContext } from 'react'
import { CountContext } from './Context'

const CounterValue = () => {
    const [value, setValue] = useContext(CountContext);
    const mystyle = {
        button: {
            fontSize: "20px",
            color: "brown",
            background: "none",
            height: "50px",
            width: '50px',
            padding: "0",
            border: "none",
        }
    }

    return (
        <div style={mystyle.container}>
            <span>Counter Value</span><br />
            <span>{value.count}</span>
        </div>
    )
}

export default CounterValue
