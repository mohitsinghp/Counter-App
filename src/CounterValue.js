import React, { useContext } from 'react'
import { CountContext } from './Context'

const CounterValue = () => {
    const [value, setValue] = useContext(CountContext);
    return (
        <div>
            <span>Counter Value</span><br />
            <span>{value.count}</span>
        </div>
    )
}

export default CounterValue
