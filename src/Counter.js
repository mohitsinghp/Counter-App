import React, { useContext } from 'react'
import { CountContext } from './Context'

const Counter = () => {
    const [value, setValue] = useContext(CountContext);

    const addCount = () => {
        setValue({
            count: +value.count + 1
        });
    }
    const minusCount = () => {
        setValue({
            count: +value.count - 1
        });
    }

    const changeCount = (e) => {
        console.log(e.target.value)
        setValue({count: e.target.value})
    }

    return (
        <div>
          <button onClick={minusCount}>-</button>
          <input type="text"
          name="count" 
          value={value.count}
          placeholder={value.count}
          onChange={changeCount} />  
          <button onClick={addCount}>+</button>
        </div>
    )
}

export default Counter
